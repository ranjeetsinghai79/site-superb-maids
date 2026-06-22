import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Superb Maids",
    tagline: "Sparkling Homes, Stress-Free Living",
    phone: "(702) 721-8858",
    phoneHref: "tel:+17027218858",
    email: "info@superbmaids.com",
    address: "3230 E Flamingo Rd, Las Vegas, NV 89121",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Henderson"],
    license: "Licensed by State of Nevada and City of Las Vegas",
    since: "2014",
    google_rating: "4.7",
    review_count: "970+",
    emergency: false,
    theme: "noir",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Comprehensive cleaning for every room in your home.", urgent: false },
    { icon: "home", title: "Apartment Cleaning", desc: "Tailored cleaning services perfect for apartments and condos.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Intensive cleaning to refresh and sanitize your entire living space.", urgent: false },
    { icon: "wrench", title: "Standard Cleaning", desc: "Regular maintenance cleaning to keep your home consistently tidy.", urgent: false },
    { icon: "scissors", title: "Professional Organizing", desc: "Declutter and organize your home for a more functional space.", urgent: false },
    { icon: "heart", title: "Eco-Friendly Cleaning", desc: "Green product options for a safe and sustainable clean.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Las Vegas", stars: 5, text: "Superb Maids transformed my home! After a deep clean, my house felt brand new. The team was incredibly thorough, focusing on every detail from the kitchen to the bathrooms. It was worth every penny, and I've already booked my next service. Highly recommend their exceptional work!" },
    { name: "Mark T.", location: "Henderson", stars: 5, text: "I've used several cleaning services, but Superb Maids truly stands out. Their standard cleaning service keeps my apartment immaculate, and I love the convenience. The staff is always professional and friendly. My home is consistently spotless, and I appreciate their reliability." },
    { name: "Emily R.", location: "Las Vegas", stars: 5, text: "The eco-friendly option from Superb Maids is fantastic! I'm always hesitant about harsh chemicals, so finding a service that uses green products was a huge win. My home smells fresh and clean without any strong odors. They did an amazing job on my windows and blinds too!" }
  ],

  trustBadges: [
    "Licensed & Insured", "27,000+ Homes Cleaned", "SBA Small Business of the Year", "10+ Years Experience"
  ],

  stats: [
    { value: 4.7, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 27000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "Guaranteed 10-minute callback for all inquiries." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Transparent flat rates, no hidden fees or surprises." },
    { icon: "award", title: "Certified Pros", desc: "Highly vetted, trained, and insured cleaning specialists." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Free re-clean if you're not completely happy." },
    { icon: "home", title: "Detailed Cleaning", desc: "Every clean is a deep clean, ensuring thorough results." },
    { icon: "shield-check", title: "Fully Insured", desc: "$2M liability and Worker's Comp for your peace of mind." }
  ],

  formServiceOptions: ["House Cleaning", "Apartment Cleaning", "Standard Cleaning", "Deep Cleaning", "Professional Organizing", "Eco-Friendly Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!