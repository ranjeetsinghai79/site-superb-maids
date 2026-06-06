import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Superb Maids",
    tagline: "Your Home Deserves To Shine.",
    phone: "(702) 721-8858",
    phoneHref: "tel:+17027218858",
    email: "info@superbmaids.com",
    address: "3230 E Flamingo Rd #310",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Henderson"],
    license: "Licensed by State of Nevada, Licensed by City of Las Vegas",
    since: "2014",
    google_rating: "4.7",
    review_count: "970",
    emergency: false,
    theme: "noir",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning Service", desc: "Experience a truly deep clean that restores your home to a like-new condition.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Our comprehensive deep cleaning process targets every nook and cranny for an immaculate finish.", urgent: false },
    { icon: "briefcase", title: "Office Cleaning", desc: "Maintain a pristine and productive work environment with our professional office cleaning solutions.", urgent: false },
    { icon: "hammer", title: "Move-In/Out Cleaning", desc: "Ensure a spotless transition with our thorough cleaning services for moving in or out.", urgent: false },
    { icon: "star", title: "Recurring Cleaning", desc: "Enjoy consistent cleanliness with our customizable weekly, bi-weekly, or monthly cleaning schedules.", urgent: false },
    { icon: "shield-check", title: "Eco-Friendly Cleaning", desc: "We use environmentally safe products to protect your family, pets, and the planet.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Las Vegas", stars: 5, text: "Superb Maids truly lives up to their name! I hired them for a deep clean before a family gathering, and they transformed my home. The team spent over three hours, meticulously cleaning every surface. My kitchen has never looked so good, and the bathrooms sparkle. Worth every penny for the peace of mind!" },
    { name: "Mark T.", location: "Henderson", stars: 5, text: "I've been using Superb Maids for recurring bi-weekly cleaning for the past six months, and I couldn't be happier. They are consistently punctual, professional, and thorough. I love coming home to a fresh, clean house without having to lift a finger. Their flat-rate pricing is also a huge plus – no surprises!" },
    { name: "Jessica R.", location: "Las Vegas", stars: 5, text: "Moving is stressful enough, but Superb Maids made the move-out cleaning absolutely seamless. They were incredibly detailed, ensuring the apartment was spotless for the final inspection. The landlord was impressed, and I got my full deposit back. Highly recommend their services for anyone moving!" }
  ],

  trustBadges: [
    "Licensed & Insured", "27,000+ Homes Cleaned", "Top-Rated Las Vegas", "Worker's Comp Insured", "Background-Checked Staff", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.7, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 27000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Award-Winning Service", desc: "Recognized as the best house cleaning service in Las Vegas by the Review Journal and SBA Nevada." },
    { icon: "shield-check", title: "Vetted Professionals", desc: "Our team is rigorously screened, background-checked, and professionally trained for your peace of mind." },
    { icon: "dollar-sign", title: "Upfront Flat Rates", desc: "Enjoy honest, transparent pricing with no hidden fees. What you see is what you pay." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "If anything isn’t right, we'll fix it free of charge, no questions asked." },
    { icon: "clock", title: "Thorough & Detailed", desc: "We focus on thoroughness, not speed, ensuring every clean is a deep clean." },
    { icon: "home", title: "Insured & Licensed", desc: "Fully licensed by the State of Nevada and City of Las Vegas, with $2,000,000 liability insurance." }
  ],

  formServiceOptions: ["House Cleaning Service", "Deep Cleaning", "Office Cleaning", "Move-In/Out Cleaning", "Recurring Cleaning", "Eco-Friendly Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!