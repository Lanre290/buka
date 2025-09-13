
import { MapPin, Star, Users, Clock, Shield, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-amala-orange" />,
      title: "Discover Nearby Spots",
      description: "Find the best Amala spots in your area with our interactive map and location-based search."
    },
    {
      icon: <Star className="h-8 w-8 text-amala-orange" />,
      title: "Verified Reviews",
      description: "Read authentic reviews from fellow Amala lovers and make informed dining decisions."
    },
    {
      icon: <Users className="h-8 w-8 text-amala-orange" />,
      title: "Community Driven",
      description: "Join a community of food enthusiasts sharing their favorite Amala experiences."
    },
    {
      icon: <Clock className="h-8 w-8 text-amala-orange" />,
      title: "Real-time Updates",
      description: "Get up-to-date information on opening hours, menu changes, and special offers."
    },
    {
      icon: <Shield className="h-8 w-8 text-amala-orange" />,
      title: "Quality Assurance",
      description: "All spots go through our verification process to ensure quality and authenticity."
    },
    {
      icon: <ChefHat className="h-8 w-8 text-amala-orange" />,
      title: "Authentic Buka",
      description: "Discover restaurants that serve traditional, authentic Amala with the perfect accompaniments."
    }
  ];

  const testimonials = [
    {
      name: "Adebayo O.",
      location: "Lagos",
      rating: 5,
      comment: "Found the best Amala spot in my neighborhood through this app. The reviews were spot on!"
    },
    {
      name: "Kemi A.",
      location: "Ibadan",
      rating: 5,
      comment: "As someone who travels a lot, this app has been a lifesaver for finding authentic Amala everywhere."
    },
    {
      name: "Ibrahim M.",
      location: "Abuja",
      rating: 5,
      comment: "The community here really knows their Amala. Great recommendations and honest reviews."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-amala-cream/10">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-amala rounded-lg flex items-center justify-center">
                <ChefHat className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Buka</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/home">
                <button className="cursor-pointer">Discover</button>
              </Link>
              <Link to="/home">
                <button className="bg-gradient-amala hover:opacity-90 cursor-pointer">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6 bg-amala-orange/10 text-amala-orange border border-[#DB5F34]/20 rounded-xl w-96 mx-auto">
            🍲 The Ultimate Amala Discovery Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Discover the Best
            <span className="text-transparent bg-clip-text bg-[#DB5F34] block">
              Amala Spots
            </span>
            Near You
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find authentic Amala restaurants, read verified reviews, and connect with a community 
            of food lovers who share your passion for this beloved Nigerian delicacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/home">
              <button  className="bg-gradient-amala hover:opacity-90 text-lg px-8 py-6 flex flex-row items-center justify-center cursor-pointer">
                Start Exploring
                <MapPin className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <a href="https://youtu.be/Kj2Eml3RFW4" target="_blank"  className="text-lg px-8 h-14 border cursor-pointer rounded-2xl hover:bg-[#DB5F34] hover:text-white hover:border-0 flex flex-row items-center justify-center">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amala-cream/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amala-orange mb-2">500+</div>
              <p className="text-muted-foreground">Verified Spots</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amala-orange mb-2">10K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amala-orange mb-2">25+</div>
              <p className="text-muted-foreground">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Buka?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a directory. We're your trusted companion in discovering 
              authentic Amala experiences across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border-0 shadow-soft bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-amala-orange/10 w-full flex flex-row items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="text-xl">{feature.title}</div>
                </div>
                <div className="text-center">
                  <div className="text-base leading-relaxed text-[#AB2F04]/50">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amala-cream/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied food lovers who trust Buka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-0 shadow-soft bg-background/80 backdrop-blur-sm">
                <div className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg">{testimonial.name}</div>
                      <div>{testimonial.location}</div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amala-orange text-amala-orange" />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="bg-[#DB5F34]/70 p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Discover Amazing Amala?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join our community today and never wonder where to find great Amala again.
              </p>
              <Link to="/home">
                <button className="text-lg px-8 py-6 bg-white/30 text-amala-brown hover:bg-white/10 cursor-pointer flex flex-row items-center justify-center rounded-2xl mx-auto">
                  Start Your Journey
                  <MapPin className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    
      <footer className="bg-background border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-amala rounded-lg flex items-center justify-center">
                <ChefHat className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Buka</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting Amala lovers with authentic experiences across Nigeria
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-amala-orange transition-colors">Privacy</a>
              <a href="#" className="hover:text-amala-orange transition-colors">Terms</a>
              <a href="#" className="hover:text-amala-orange transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;