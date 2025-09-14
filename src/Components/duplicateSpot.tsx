import { useState, useEffect } from "react";
import { 
  MapPin, 
  Star, 
  DollarSign, 
  AlertTriangle,
  Check,
  ArrowRight,
  Plus
} from "lucide-react";

interface SpotDuplicateCheckerProps {
  userLocation: { lat: number; lng: number };
  onConfirmNew: () => void;
  onSelectExisting: (spotId: string) => void;
  onCancel: () => void;
}

interface NearbySpot {
  id: string;
  name: string;
  address: string;
  distance: number;
  rating: number;
  priceRange: string;
  cuisine: string[];
  coordinates: { lat: number; lng: number };
}

// Mock function to simulate checking for nearby spots
const findNearbySpots = (userLat: number, userLng: number): NearbySpot[] => {
  // Mock data - in real implementation, this would query the database
  const mockSpots: NearbySpot[] = [
    {
      id: "1",
      name: "Mama Kemi's Kitchen",
      address: "15 Lagos Street, Ikeja",
      distance: 0.1, // km
      rating: 4.5,
      priceRange: "₦₦",
      cuisine: ["Traditional", "Amala"],
      coordinates: { lat: userLat + 0.001, lng: userLng + 0.001 }
    },
    {
      id: "2", 
      name: "Yoruba Delicacy Spot",
      address: "23 Ogundimu Street, Ikeja",
      distance: 0.2,
      rating: 4.2,
      priceRange: "₦₦₦",
      cuisine: ["Traditional", "Amala", "Ewedu"],
      coordinates: { lat: userLat + 0.002, lng: userLng - 0.001 }
    }
  ];

  // Filter spots within 500m radius
  return mockSpots.filter(spot => spot.distance <= 0.5);
};

export const SpotDuplicateChecker = ({ 
  userLocation, 
  onConfirmNew, 
  onSelectExisting, 
  onCancel 
}: SpotDuplicateCheckerProps) => {
  const [nearbySpots, setNearbySpots] = useState<NearbySpot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to check for nearby spots
    const checkNearbySpots = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const spots = findNearbySpots(userLocation.lat, userLocation.lng);
      setNearbySpots(spots);
      setLoading(false);
    };

    checkNearbySpots();
  }, [userLocation]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="w-full max-w-md mx-4 p-6 border border-gray-600 rounded-4xl bg-[#DB5F34]/5">
          <div className="text-center space-y-4">
            <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <h3 className="text-lg font-semibold">Checking for nearby spots...</h3>
            <p className="text-sm text-muted-foreground">
              We're looking for existing Amala spots in your area to avoid duplicates
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto border border-gray-600 rounded-4xl bg-[#DB5F34]/5">
        <div className="p-6 space-y-6">
          {nearbySpots.length > 0 ? (
            <>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <AlertTriangle className="h-12 w-12 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold">Spots Found Nearby</h2>
                <p className="text-muted-foreground">
                  We found {nearbySpots.length} existing Amala spot{nearbySpots.length > 1 ? 's' : ''} within 500m of your location.
                  Please check if any of these match the spot you want to add.
                </p>
              </div>

              <div className="space-y-4">
                {nearbySpots.map((spot) => (
                  <div key={spot.id} className="p-4 shadow-md transition-shadow cursor-pointer border border-gray-300 rounded-xl hover:shadow-lg"
                        onClick={() => onSelectExisting(spot.id)}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg">{spot.name}</h3>
                          <div className="ml-2">
                            {(spot.distance * 1000).toFixed(0)}m away
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {spot.address}
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-amber-500 mr-1" />
                            {spot.rating}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {spot.priceRange}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {spot.cuisine.map((c) => (
                            <div key={c} className="border border-gray-300 rounded-full px-2 py-1 text-xs">
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                  Is the spot you want to add different from all the spots above?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={onCancel}
                    className="flex-1 cursor-pointer flex items-center justify-center flex-row border border-gray-300 rounded-xl px-4 py-2 bg-white/34"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={onConfirmNew}
                    className="flex-1 items-center justify-center cursor-pointer flex-row bg-[#BD6628] text-white rounded-xl px-4 py-2 flex"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Spot
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Check className="h-12 w-12 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">No Duplicates Found</h2>
                <p className="text-muted-foreground">
                  Great! We didn't find any existing Amala spots at this location. 
                  You can proceed to add your new spot.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onCancel}
                  className="flex-1"
                >
                  Cancel
                </button>
                <button 
                  onClick={onConfirmNew}
                  className="flex-1"
                >
                  Continue Adding Spot
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};