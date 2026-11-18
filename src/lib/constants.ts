export const SITE_NAME = "Clinical Care Consultants";
export const SITE_SHORT = "CCC";
export const TAGLINE = "Counselors Who Care";

export const LOGO_URL = "/images/logo.png";
export const LOGO_MARK_URL = "/images/logo-mark.png";

export const HERO_IMAGE = "/images/hero-portrait.webp";
export const FINAL_IMAGE = "/images/sea-breeze-green.webp";
export const TMS_IMAGE = "/images/ampa-tms-system.webp";
export const WHY_IMAGE = "/images/self-discovery.webp";
export const HERO_IMAGE_ALT = "Woman relaxing comfortably in a bright, calm room";

export const FORM_SECTION_ID = "qualify";
export const TMS_SECTION_ID = "tms";
export const WHY_SECTION_ID = "why-ccc";
export const FAQ_SECTION_ID = "faq";
export const VISIT_SECTION_ID = "visit";

export const FORM_ID = "wnaOstwjn9uOhLYwdYXh";
export const FORM_IFRAME_ID = "inline-wnaOstwjn9uOhLYwdYXh";
export const FORM_NAME = "TMS: New Web Inquiry + Params";
export const FORM_HEIGHT = "2082";

/**
 * TODO before launch: replace with the Twilio tracking number.
 * The brief did not include it, so the clinic's main line is used for now.
 */
export const PHONE_NUMBER = "(847) 749-0514";
export const PHONE_HREF = "tel:+18477490514";

export const ADDRESS_LINES = ["1642 W. Colonial Parkway", "Inverness, IL 60067"] as const;
export const ADDRESS_NOTE = "Across from Harper College in Palatine";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=1642+W+Colonial+Pkwy+Inverness+IL+60067";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=1642+W+Colonial+Pkwy,+Inverness,+IL+60067&output=embed";

export const WEBSITE_URL = "https://www.clinicalcareconsultants.com/";
export const WEBSITE_LABEL = "ClinicalCareConsultants.com";

export const DEVICE_NAME = "AMPA";

export const SERVICE_AREAS = [
  "Inverness",
  "Palatine",
  "Schaumburg",
  "Hoffman Estates",
  "Rolling Meadows",
  "Barrington",
  "South Barrington",
  "Deer Park",
  "Kildeer",
] as const;

export const MARQUEE_ITEMS = [
  "Non-invasive TMS therapy",
  "Counselors Who Care",
  "No medication or sedation",
  "Licensed, experienced clinicians",
  "Insurance assistance",
  "Inverness and Palatine, IL",
  "Now welcoming new clients",
] as const;

export const TMS_FACTS = [
  { value: "Non-invasive", label: "No surgery, nothing enters the body" },
  { value: "No sedation", label: "You stay awake and alert" },
  { value: "No downtime", label: "Drive yourself and return to your day" },
  { value: "In-office", label: "Treatment at our Inverness office" },
] as const;

export const HELPS_ITEMS = [
  {
    title: "Depression that hasn't lifted",
    description:
      "You've tried one or more antidepressants and the heaviness is still there.",
  },
  {
    title: "Medication side effects",
    description:
      "Fatigue, weight changes, or feeling unlike yourself made medication hard to stay on.",
  },
  {
    title: "Therapy alone hasn't been enough",
    description: "You've put in the work with a counselor and still feel stuck.",
  },
  {
    title: "Depression with anxious feelings",
    description:
      "Worry and restlessness often come along with depression. We'll talk through all of it.",
  },
] as const;

export const STEPS = [
  {
    title: "Tell us about you",
    description:
      "Complete the short form or call. It takes about two minutes and it is confidential.",
  },
  {
    title: "Review and benefits check",
    description:
      "Our office staff looks at your history and helps sort out your insurance questions.",
  },
  {
    title: "Clinical evaluation",
    description:
      "A licensed clinician confirms whether TMS is a safe and appropriate fit for you.",
  },
  {
    title: "Begin treatment",
    description:
      "Short weekday sessions over several weeks, with a team that checks in along the way.",
  },
] as const;

export const WHY_STATS = [
  { value: 19, suffix: "", label: "Average years our clinicians have spent in the field" },
  { value: 2, suffix: "+", label: "Specialty areas held by every licensed clinician" },
  { value: 9, suffix: "", label: "Northwest suburban communities we serve" },
] as const;

export const WHY_ITEMS = [
  {
    title: "Seasoned, licensed clinicians",
    description:
      "CCC clinicians are confident, experienced professionals who average 19 years in the field.",
    icon: "shield",
  },
  {
    title: "Specialty driven care",
    description:
      "Each clinician holds at least two areas of specialty, and many carry advanced certifications.",
    icon: "spark",
  },
  {
    title: "Compassionate, caring staff",
    description:
      "Every member of our team truly cares about what they do and how they do it.",
    icon: "heart",
  },
  {
    title: "Care under one roof",
    description:
      "Counseling, psychiatry, and TMS work together, so your plan fits the whole picture.",
    icon: "leaf",
  },
] as const;

export const TRUST_ITEMS = [
  {
    title: "Local to Inverness and Palatine",
    description:
      "Our office sits right across from Harper College, minutes from Schaumburg, Hoffman Estates, and Barrington.",
    icon: "pin",
  },
  {
    title: "Insurance assistance",
    description:
      "Our office staff handles the confusing, time-consuming insurance benefits and billing questions with you.",
    icon: "card",
  },
  {
    title: "Welcoming office staff",
    description:
      "From the very first call to the final session, our staff makes you and your loved ones feel welcome.",
    icon: "door",
  },
  {
    title: "Telehealth across Illinois",
    description:
      "Counseling and follow-up visits are available by telehealth for Illinois residents.",
    icon: "pulse",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is TMS therapy?",
    answer:
      "Transcranial magnetic stimulation (TMS) uses gentle magnetic pulses, delivered through a coil that rests against your head, to stimulate the areas of the brain involved in mood. It is non-invasive and does not involve medication, anesthesia, or sedation.",
  },
  {
    question: "Who may qualify for TMS?",
    answer:
      "TMS is typically considered for adults whose depression has not improved enough with antidepressant medication. A clinical evaluation confirms whether it is safe and appropriate for you. The quickest way to find out is the short qualification form on this page, or a call to our office.",
  },
  {
    question: "What does a session feel like?",
    answer:
      "You sit in a comfortable chair, awake the whole time. Most people notice a tapping sensation on the scalp and a clicking sound. Some people have a mild headache or scalp discomfort, especially early on. You can drive yourself home and return to your normal day right after.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "A course of TMS usually means short weekday visits over several weeks. Your clinician will explain the schedule that fits your treatment plan before you begin.",
  },
  {
    question: "Will insurance cover TMS?",
    answer:
      "Coverage depends on your plan and is not guaranteed. Our office staff will review your benefits and expected costs with you up front so there are no surprises.",
  },
  {
    question: "Can I keep seeing my current therapist or prescriber?",
    answer:
      "Yes. TMS can work alongside counseling and medication management. If you would like, CCC clinicians can coordinate with your current providers.",
  },
] as const;
