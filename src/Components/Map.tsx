import { useState, useEffect, useRef } from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import { toast } from "sonner";
import "mapbox-gl/dist/mapbox-gl.css";

// Make sure to set your Mapbox token in .env as VITE_MAPBOX_TOKEN
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

interface Location {
  name?: string;
  lat: number;
  lng: number;
}

// Predefined campus locations
const locations: Location[] = [
  { name: "Burba Marwa", lat: 6.4731069928423395, lng: 3.2015184369190073 },
  { name: "Senate Building", lat: 6.471211177998569, lng: 3.199952782857913 },
  { name: "Love Garden", lat: 6.4694481147419935, lng: 3.2005249640922355 },
  { name: "Science Complex", lat: 6.466362124948927, lng: 3.2003106126389302 },
];

const Map = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[3]);
  const [travelMethod, setTravelMethod] = useState<"walking" | "driving" | "cycling">("walking");

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

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Initialize map after we have user location
  useEffect(() => {
    if (!userLocation || !mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [userLocation.lng, userLocation.lat],
      zoom: 16,
    });
    mapRef.current = map;
    map.addControl(new mapboxgl.NavigationControl());

    // Add campus location markers
    locations.forEach((loc) => {
      const marker = new mapboxgl.Marker().setLngLat([loc.lng, loc.lat]).addTo(map);
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(loc.name!);
      marker.setPopup(popup);
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

    const routeUrl = `https://api.mapbox.com/directions/v5/mapbox/${travelMethod}/${userLocation.lng},${userLocation.lat};${selectedLocation.lng},${selectedLocation.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

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
    <div style={{ width: "100%", height: "600px" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Map;
