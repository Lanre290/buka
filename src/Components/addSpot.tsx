import { useState } from "react";
import { 
  MapPin, 
  Camera, 
  Clock, 
  Phone, 
  DollarSign, 
  ChefHat, 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  Check,
  X,
  Plus,
  Upload
} from "lucide-react";
import { toast } from "sonner";


interface AddSpotWizardProps {
  onClose: () => void;
}

const steps = [
  { id: 1, title: "Basic Info", icon: MapPin },
  { id: 2, title: "Details", icon: ChefHat },
  { id: 3, title: "Photos", icon: Camera },
  { id: 4, title: "Review", icon: Check }
];

export const AddSpot = ({ onClose }: AddSpotWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cuisineinput, setCuisineinput] = useState("");
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    description: "",
    priceRange: "",
    openTime: "",
    closeTime: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addCuisine = () => {
    if (cuisineinput.trim() && !cuisines.includes(cuisineinput.trim())) {
      setCuisines([...cuisines, cuisineinput.trim()]);
      setCuisineinput("");
    }
  };

  const removeCuisine = (cuisine: string) => {
    setCuisines(cuisines.filter(c => c !== cuisine));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    toast.success("Amala spot submitted!");
    onClose();
  };

  const progress = (currentStep / 4) * 100;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl max-h-[95vh] overflow-hidden bg-[#f9f5e7]/65 border border-primary/10 shadow-2xl rounded-3xl">
        <div className="bg-gradient-warm p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Add New Amala Spot</h2>
                <p className="text-white/90">Share your favorite spot with the community</p>
              </div>
              <button onClick={onClose} className="text-white hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* progress */}
            <div className="space-y-3">
              <progress value={progress} className="h-2 bg-white/20" />
              <div className="flex justify-between">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-2 ${
                      currentStep >= step.id ? "text-white" : "text-white/50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step.id ? "bg-white text-primary border-white" : "border-white/50"
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <step.icon className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-sm font-medium hidden sm:block">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Basic Information</h3>
                <p className="text-muted-foreground">Let's start with the essentials</p>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="text-base font-medium">Restaurant Name *</label>
                  
                  <input
                    id="name"
                    placeholder="e.g., Mama Cass Amala Joint"
                    value={formData.name}
                    onChange={(e: any) => updateFormData("name", e.target.value)}
                    className="pl-3 h-12 text-base bg-white/70"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="address" className="text-base font-medium">Full Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                    <input
                      id="address"
                      placeholder="Street address, city, state, country"
                      value={formData.address}
                      onChange={(e: any) => updateFormData("address", e.target.value)}
                      className="pl-12 h-12 text-base bg-white/70"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="phone" className="text-base font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+234 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={(e: any) => updateFormData("phone", e.target.value)}
                      className="pl-12 h-12 text-base bg-white/70"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Spot Details</h3>
                <p className="text-muted-foreground">Tell us what makes this place special</p>
              </div>

              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-base font-medium flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Price Range
                    </label>
                    <select
                      value={formData.priceRange}
                      onChange={(e: any) => updateFormData("priceRange", e.target.value)}
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-base bg-white/65"
                    >
                      <option value="">Select range</option>
                      <option value="₦">₦ Budget-friendly (Under ₦1,000)</option>
                      <option value="₦₦">₦₦ Moderate (₦1,000 - ₦3,000)</option>
                      <option value="₦₦₦">₦₦₦ Premium (Above ₦3,000)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-base font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 bg-white/65" />
                      Opening Time
                    </label>
                    <input
                      type="time"
                      value={formData.openTime}
                      onChange={(e: any) => updateFormData("openTime", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-base font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 bg-white/65" />
                      Closing Time
                    </label>
                    <input
                      type="time"
                      value={formData.closeTime}
                      onChange={(e: any) => updateFormData("closeTime", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-base font-medium">Specialties</label>
                  <div className="flex gap-2">
                    <input
                      value={cuisineinput}
                      onChange={(e: any) => setCuisineinput(e.target.value)}
                      placeholder="e.g., Traditional Amala, Modern Fusion"
                      onKeyPress={(e: any) => e.key === 'Enter' && (e.preventDefault(), addCuisine())}
                      className="h-12 bg-white/65"
                    />
                    <button type="button" onClick={addCuisine} className="h-12 px-6">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cuisines.map((cuisine, index) => (
                      <div key={index} className="text-sm py-2 px-3 bg-secondary hover:bg-secondary/80">
                        {cuisine}
                        <button
                          type="button"
                          onClick={() => removeCuisine(cuisine)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 fle flex-row justify-start item-start">
                  <label className="font-medium flex justify-start items-start">Description</label>
                  <textarea
                    placeholder="Describe the atmosphere, signature dishes, what makes this spot unique..."
                    value={formData.description}
                    onChange={(e: any) => updateFormData("description", e.target.value)}
                    rows={4}
                    className="text-base bg-white/65 w-80 h-72 mb-3"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Add Photos</h3>
                <p className="text-muted-foreground">Help others discover this amazing spot</p>
              </div>

              <div className="grid gap-6">
                <div className="relative border-2 border-dashed border-primary/20 rounded-xl p-12 text-center bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors">
                  <input type="file" className="absolute top-0 bottom-0 right-0 left-0 opacity-0 cursor-pointer" />
                  <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Upload Photos</h4>
                  <p className="text-muted-foreground mb-6">
                    Add photos of the food, interior, exterior, and menu
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Review & Submit</h3>
                <p className="text-muted-foreground">Check your information before submitting</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Restaurant:</span>
                    <span className="font-semibold">{formData.name || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Address:</span>
                    <span className="font-semibold text-right max-w-xs">{formData.address || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Price Range:</span>
                    <span className="font-semibold">{formData.priceRange || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Hours:</span>
                    <span className="font-semibold">
                      {formData.openTime && formData.closeTime 
                        ? `${formData.openTime} - ${formData.closeTime}` 
                        : "Not specified"}
                    </span>
                  </div>
                  {cuisines.length > 0 && (
                    <div>
                      <span className="font-medium text-muted-foreground mb-2 block">Cuisines:</span>
                      <div className="flex flex-wrap gap-2">
                        {cuisines.map((cuisine, index) => (
                          <div key={index}>{cuisine}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">Community Verification</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Your spot will be reviewed by our community before going live. This helps ensure quality and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}



            <div className="border-t bg-muted/30 p-6 pb-2 mt-10">
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-gradient-warm hover:opacity-90 cursor-pointer"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-gradient-warm hover:opacity-90"
                  >
                    <Check className="w-4 h-4" />
                    Submit Spot
                  </button>
                )}
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};