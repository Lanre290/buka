import { useState, useEffect, useRef } from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import { toast } from "sonner";
import "mapbox-gl/dist/mapbox-gl.css";
import { createPopupHTML } from "../utils/Map.utils";

interface Location {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  cuisine: string[];
  openHours: string;
  verificationStatus: "verified" | "pending" | "rejected";
  distance: string;
  lat: number;
  lng: number;
  imageUrl?: string; // optional – for a thumbnail/photo
}


// Predefined campus locations
const locations = [
  {
    id: "1",
    name: "Mama Sisi's Kitchen",
    address: "15 Ogunlana Drive, Surulere, Lagos",
    rating: 4.8,
    reviewCount: 124,
    priceRange: "₦₦",
    cuisine: ["Traditional", "Amala & Ewedu", "Grilled Fish"],
    openHours: "Open until 10 PM",
    verificationStatus: "verified" as const,
    distance: "0.8 km",
    lat: 6.5007,  // Surulere area
    lng: 3.3598,
  },
  {
    id: "2",
    name: "Buka Express",
    address: "45 Allen Avenue, Ikeja, Lagos",
    rating: 4.5,
    reviewCount: 89,
    priceRange: "₦",
    cuisine: ["Fast Food", "Traditional", "Amala"],
    openHours: "Open 24 hours",
    verificationStatus: "verified" as const,
    distance: "1.2 km",
    lat: 6.6018,  // Ikeja area
    lng: 3.3515,
  },
  {
    id: "3",
    name: "Yakoyo Restaurant",
    address: "12 Admiralty Way, Lekki Phase 1, Lagos",
    rating: 4.6,
    reviewCount: 156,
    priceRange: "₦₦₦",
    cuisine: ["Premium", "Traditional", "Continental"],
    openHours: "Closes at 9 PM",
    verificationStatus: "pending" as const,
    distance: "2.1 km",
    lat: 6.4410,  // Lekki area
    lng: 3.4855,
  },
];


const Map = () => {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const [travelMethod, setTravelMethod] = useState<"walking" | "driving" | "cycling">("driving");

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const userMarkerRef = useRef<Marker | null>(null);
  const userLabelMarkerRef = useRef<Marker | null>(null);

  // Track user location continuously
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        toast.error("Unable to get location. Using default.");
        setUserLocation({ lat: 6.471211177998569, lng: 3.199952782857913 });
      },
      { enableHighAccuracy: true }
    );

    setTravelMethod("driving");
    setSelectedLocation(locations[0]);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Initialize map after we have user location
  useEffect(() => {
    if (!userLocation || !mapContainer.current) return;
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [userLocation.lng, userLocation.lat],
      zoom: 16,
    });

    mapRef.current = map;
    map.addControl(new mapboxgl.NavigationControl());

    locations.forEach((loc: Location) => {
    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
      closeOnClick: false,
      closeOnMove: false,
      className: 'w-96'
    }).setHTML(createPopupHTML(loc));

    const marker = new mapboxgl.Marker()
      .setLngLat([loc.lng, loc.lat])
      .addTo(map);

    // Show popup on hover  
    marker.getElement().addEventListener("mouseenter", () => popup.addTo(map).setLngLat([loc.lng, loc.lat]));
    marker.getElement().addEventListener("mouseleave", () => popup.remove());
  });


    // Add user marker
    const userMarker = new mapboxgl.Marker({ color: "#007cbf" })
      .setLngLat([userLocation.lng, userLocation.lat])
      .addTo(map);
    const userLabel = document.createElement("div");
    userLabel.className = "map-label";
    userLabel.innerText = "You";
    const userLabelMarker = new mapboxgl.Marker(userLabel)
      .setLngLat([userLocation.lng, userLocation.lat])
      .addTo(map);

    userMarkerRef.current = userMarker;
    userLabelMarkerRef.current = userLabelMarker;

    return () => map.remove();
  }, [userLocation]);

  // Smoothly animate user marker
  useEffect(() => {
    if (!userLocation) return;

    const smoothMoveMarker = (marker: Marker, target: [number, number]) => {
      const start = marker.getLngLat();
      const startTime = performance.now();
      const duration = 600; // ms

      const animate = (time: number) => {
        const t = Math.min((time - startTime) / duration, 1);
        const lng = start.lng + t * (target[0] - start.lng);
        const lat = start.lat + t * (target[1] - start.lat);
        marker.setLngLat([lng, lat]);
        if (t < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    if (userMarkerRef.current) smoothMoveMarker(userMarkerRef.current, [userLocation.lng, userLocation.lat]);
    if (userLabelMarkerRef.current) smoothMoveMarker(userLabelMarkerRef.current, [userLocation.lng, userLocation.lat]);
  }, [userLocation]);

  // Draw route from user to selected location
  useEffect(() => {
    if (!userLocation || !selectedLocation || !mapRef.current) return;

    const routeUrl = `https://api.mapbox.com/directions/v5/mapbox/${travelMethod}/${userLocation.lng},${userLocation.lat};${selectedLocation.lng},${selectedLocation.lat}?geometries=geojson&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`;

    fetch(routeUrl)
      .then((res) => res.json())
      .then((data) => {
        const route = data.routes[0].geometry;
        const map = mapRef.current!;
        if (map.getLayer("route")) {
          map.removeLayer("route");
          map.removeSource("route");
        }
        map.addSource("route", { type: "geojson", data: { type: "Feature", geometry: route, properties: {} } });
        map.addLayer({
          id: "route",
          type: "line",
          source: "route",
          paint: { "line-color": "#007cbf", "line-width": 5 },
        });
      })
      .catch(() => toast.error("Error fetching directions"));
  }, [userLocation, selectedLocation, travelMethod]);

  return (
    <div style={{ width: "63%", height: "700px", margin: 'auto' }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Map;
