import { Badge } from "./../Components/ui/badge";
import { Button } from "./../Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./../Components/ui/card";
import { Separator } from "./../Components/ui/seperator";
import { Avatar, AvatarFallback } from "./../Components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Users, 
  Camera,
  Heart,
  Share2,
  Navigation,
  Calendar,
  ArrowLeft,
  Shield,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const RestaurantProfile = () => {
  const restaurantData = {
    name: "Mama Adunni's Kitchen",
    rating: 4.8,
    reviewCount: 324,
    priceRange: "₦₦",
    cuisine: ["Traditional Nigerian", "Amala", "Yoruba Cuisine"],
    address: "15 Balogun Street, Lagos Island, Lagos",
    phone: "+234 801 234 5678",
    website: "www.mamaadunni.com",
    hours: "Mon-Sat: 10AM-10PM, Sun: 12PM-9PM",
    description: "Authentic Yoruba cuisine served with love for over 20 years. Our signature Amala and Ewedu soup has been a Lagos favorite, made with traditional recipes passed down through generations.",
    establishedYear: "2003",
    capacity: "80 guests",
    verificationStatus: "verified" as const
  };

  const menuHighlights = [
    { name: "Signature Amala & Ewedu", price: "₦2,500", description: "Our famous hand-pounded amala with fresh ewedu soup" },
    { name: "Gbegiri & Efo Riro Combo", price: "₦3,200", description: "Rich gbegiri soup with fresh vegetable stew" },
    { name: "Pepper Soup Catfish", price: "₦4,000", description: "Fresh catfish in aromatic pepper soup blend" },
    { name: "Ofada Rice Special", price: "₦3,500", description: "Local rice with signature ofada stew" }
  ];

  const reviews = [
    {
      name: "Kemi Olatunji",
      rating: 5,
      date: "2 days ago",
      comment: "Best Amala in Lagos! The taste takes me back to my grandmother's cooking. Highly recommended!",
      avatar: "KO"
    },
    {
      name: "Tunde Adebayo",
      rating: 5,
      date: "1 week ago", 
      comment: "Authentic flavors and excellent service. The ewedu soup is incredibly fresh and flavorful.",
      avatar: "TA"
    },
    {
      name: "Sarah Johnson",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great introduction to Nigerian cuisine! Staff was very helpful explaining the dishes.",
      avatar: "SJ"
    }
  ];

  const galleryImages = [
    { id: 1, alt: "Signature Amala dish" },
    { id: 2, alt: "Restaurant interior" },
    { id: 3, alt: "Fresh ingredients" },
    { id: 4, alt: "Traditional cooking method" },
    { id: 5, alt: "Happy customers" },
    { id: 6, alt: "Chef preparing meal" }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Navigation */}
      <div className="relative z-30 p-4">
        <Link to="/discover">
          <Button variant="ghost" className="text-white hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Discover
          </Button>
        </Link>
      </div>

      {/* Hero Header Section */}
      <div className="relative -mt-16 h-96 bg-gradient-warm overflow-hidden shadow-warm">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-8">
          <div className="text-white max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-emerald-500/90 text-white border-0 backdrop-blur-sm px-3 py-1 flex items-center gap-1.5">
                <Shield className="w-3 h-3" />
                {restaurantData.verificationStatus}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1 flex items-center gap-1.5">
                <Award className="w-3 h-3" />
                Est. {restaurantData.establishedYear}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              {restaurantData.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-white">{restaurantData.rating}</span>
                <span className="text-sm">({restaurantData.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-amala-warm">{restaurantData.priceRange}</span>
                <span className="text-white/60">•</span>
                <div className="flex flex-wrap gap-2">
                  {restaurantData.cuisine.slice(0, 2).map((item, index) => (
                    <span key={index} className="text-sm font-medium bg-white/10 backdrop-blur-sm rounded-md px-2 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Action Buttons */}
            <Card className="shadow-card border-0 backdrop-blur-sm bg-card/80">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button className="bg-gradient-warm hover:shadow-warm transition-all duration-300 transform hover:-translate-y-0.5 border-0 text-white font-semibold">
                    <Navigation className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                  <Button variant="outline" className="hover:bg-amala-primary hover:text-white transition-all duration-300 border-amala-primary/30">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-300">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="hover:bg-amala-cream hover:border-amala-primary/30 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                  About This Place
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {restaurantData.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {restaurantData.cuisine.map((item, index) => (
                    <Badge 
                      key={index} 
                      className="bg-amala-cream text-amala-earth border-0 px-3 py-1.5 font-medium hover:bg-amala-primary hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-3">
                  <Camera className="w-6 h-6 text-amala-primary" />
                  Photo Gallery
                  <Badge variant="secondary" className="ml-auto">
                    {galleryImages.length} photos
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={image.id}
                      className="group aspect-square bg-gradient-to-br from-amala-cream via-amala-warm/20 to-amala-primary/30 rounded-xl flex items-center justify-center text-5xl cursor-pointer hover:shadow-warm transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {index === 0 ? '🍲' : index === 1 ? '🏪' : index === 2 ? '🥬' : index === 3 ? '👨‍🍳' : index === 4 ? '😊' : '📸'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu Highlights */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Menu Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {menuHighlights.map((item, index) => (
                    <div key={index} className="group p-4 rounded-xl bg-gradient-to-r from-amala-cream/50 to-transparent hover:from-amala-cream hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-card-foreground group-hover:text-amala-primary transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                        </div>
                        <span className="font-bold text-xl text-amala-primary ml-6 bg-amala-cream px-3 py-1 rounded-full">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-6 bg-amala-primary/20" />
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-amala-primary border-amala-primary/30 hover:bg-amala-primary hover:text-white font-semibold transition-all duration-300"
                >
                  View Full Menu
                </Button>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-between">
                  <span>Customer Reviews</span>
                  <Button 
                    className="bg-gradient-warm hover:shadow-warm text-white border-0 font-semibold transition-all duration-300"
                    size="sm"
                  >
                    Write Review
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {reviews.map((review, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12 border-2 border-amala-cream">
                          <AvatarFallback className="bg-gradient-warm text-white font-bold text-lg">
                            {review.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-bold text-lg text-card-foreground">{review.name}</span>
                              <div className="flex items-center gap-1 mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground bg-amala-cream px-2 py-1 rounded-md">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-base bg-gradient-to-r from-amala-cream/30 to-transparent p-4 rounded-lg">
                            "{review.comment}"
                          </p>
                        </div>
                      </div>
                      {index < reviews.length - 1 && <Separator className="bg-amala-primary/20" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-4 p-3 rounded-lg bg-gradient-to-r from-amala-cream/30 to-transparent hover:from-amala-cream/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-amala-primary mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-card-foreground">Address</p>
                    <p className="text-muted-foreground leading-relaxed">{restaurantData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-lg bg-gradient-to-r from-amala-cream/30 to-transparent hover:from-amala-cream/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-amala-primary mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-card-foreground">Phone</p>
                    <p className="text-amala-primary font-medium cursor-pointer hover:underline">{restaurantData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-lg bg-gradient-to-r from-amala-cream/30 to-transparent hover:from-amala-cream/50 transition-all duration-300">
                  <Globe className="w-5 h-5 text-amala-primary mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-card-foreground">Website</p>
                    <p className="text-amala-primary font-medium cursor-pointer hover:underline break-all">
                      {restaurantData.website}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-lg bg-gradient-to-r from-amala-cream/30 to-transparent hover:from-amala-cream/50 transition-all duration-300">
                  <Clock className="w-5 h-5 text-amala-primary mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-card-foreground">Hours</p>
                    <p className="text-muted-foreground leading-relaxed">{restaurantData.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground">Restaurant Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-amala-cream/30 to-transparent">
                  <Users className="w-5 h-5 text-amala-primary" />
                  <div>
                    <p className="font-semibold text-card-foreground">Capacity</p>
                    <p className="text-muted-foreground">{restaurantData.capacity}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-amala-cream/30 to-transparent">
                  <Calendar className="w-5 h-5 text-amala-primary" />
                  <div>
                    <p className="font-semibold text-card-foreground">Established</p>
                    <p className="text-muted-foreground">{restaurantData.establishedYear}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reservation */}
            <Card className="shadow-card border-0 bg-gradient-warm text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <CardHeader className="relative pb-3">
                <CardTitle className="text-xl font-bold text-white">Make a Reservation</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-white/80 text-sm mb-4">Book your table now and enjoy authentic Amala cuisine</p>
                <Button 
                  className="w-full bg-white text-amala-primary hover:bg-amala-cream font-bold h-12 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Table
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfile;