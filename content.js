// jovandhillon.com — shared content data
// Exported to window so all variation scripts can read it.

const CONTENT = {
  name: "Jovan Dhillon",
  handle: "jovan.",
  role: "Technical Services Engineer",
  location: "Warwickshire, UK",
  status: "Available to build & learn",
  email: "hello@jovandhillon.com",

  hero: {
    eyebrow: "Technical Services Engineer",
    // pieces support optional emphasis via { em: true }
    title: [
      { t: "Modern IT," },
      { t: "built quietly,", em: true },
      { t: "properly." },
    ],
    lead: "I'm Jovan. I help organisations run cleaner, calmer IT — Microsoft 365, Entra ID, Intune, UniFi networks, and the Apple side of the fleet. Currently a Technical Services Engineer fresh off a Distinction-level Level 3 apprenticeship.",
  },

  quickFacts: [
    { k: "Now",       v: "Technical Services Engineer" },
    { k: "Based",     v: "Warwickshire, UK" },
    { k: "Qualified", v: "L3 IT Apprenticeship · Distinction", accent: true },
    { k: "Focus",     v: "M365 · Entra · Intune · UniFi · Apple" },
    { k: "Writing",   v: "ApprenticeWatch ambassador" },
  ],

  stats: [
    { k: "L3",  v: "IT apprenticeship completed" },
    { k: "D",   v: "Distinction achieved" },
    { k: "MSP", v: "Managed services experience" },
    { k: "∞",   v: "Always learning" },
  ],

  services: [
    { id: "01", name: "IT Support",              tag: "Day to day",      icon: "life-buoy",  desc: "Users, devices, Microsoft 365, connectivity, and the daily business-critical issues. Calmly, quickly, and documented." },
    { id: "02", name: "Cloud & Identity",        tag: "M365 · Entra",    icon: "cloud",      desc: "Microsoft 365, Entra ID, Exchange Online, Conditional Access, permissions, and modern account administration." },
    { id: "03", name: "Networking",              tag: "UniFi · WAN",     icon: "network",    desc: "Connectivity, switching, Wi-Fi, VLANs, firewalls. Clean topology with a bias toward UniFi ecosystems." },
    { id: "04", name: "Apple & Device Fleets",   tag: "macOS · iOS",     icon: "apple",      desc: "Apple at work. MDM-minded, workflow-led, and obsessively consistent so everyday users never notice the plumbing." },
    { id: "05", name: "Digital Projects",        tag: "Web · Domains",   icon: "sparkles",   desc: "Custom domains, redirects, tasteful personal branding, polished web presence. Small, specific, premium-feeling." },
    { id: "06", name: "Infrastructure Projects", tag: "Migrations",      icon: "server",     desc: "Office moves, migrations, installs, hands-on build days. The physical, cable-labelled, rack-screwed side." },
  ],

  stack: [
    { name: "Microsoft 365",   cat: "Productivity · Admin",   status: "live",     note: "Daily" },
    { name: "Entra ID",        cat: "Identity · Access",      status: "live",     note: "Daily" },
    { name: "Intune",          cat: "Device management",      status: "live",     note: "Exploring" },
    { name: "Exchange Online", cat: "Mail · Admin",           status: "live",     note: "Daily" },
    { name: "UniFi",           cat: "Networking",             status: "live",     note: "Daily" },
    { name: "Apple (macOS/iOS)", cat: "Platform",             status: "live",     note: "Native" },
    { name: "PowerShell",      cat: "Automation",             status: "learning", note: "Growing" },
    { name: "Azure",           cat: "Cloud platform",         status: "learning", note: "Next" },
  ],

  projects: [
    {
      num: "01",
      title: "jovandhillon.com",
      kind: "Personal site",
      year: "2025",
      desc: "Custom domain, premium-minded front-end, a personal platform I can iterate on. This very page is the current draft.",
      href: "https://jovandhillon.com",
      wide: true,
    },
    {
      num: "02",
      title: "linkedin.jovandhillon.com",
      kind: "Vanity subdomain",
      year: "2025",
      desc: "A one-line custom redirect that makes my LinkedIn easier to share and more on-brand. Small thing, real impact.",
      href: "https://linkedin.jovandhillon.com",
    },
    {
      num: "03",
      title: "Custom iCloud mail domain",
      kind: "Infrastructure",
      year: "2025",
      desc: "Own domain plumbed through iCloud Custom Email. Professional addressing without adding another mailbox to manage.",
    },
    {
      num: "04",
      title: "ApprenticeWatch feature",
      kind: "Writing",
      year: "2024",
      desc: "Published reflection on starting an IT apprenticeship: what actually helped, what to expect, what nobody warns you about.",
      href: "https://apprenticewatch.com/resources/what-starting-my-it-apprenticeship-taught-me",
    },
  ],

  now: [
    "Working hands-on as a Technical Services Engineer at an MSP — tickets, projects, installs, the full picture.",
    "Deepening Entra ID, Intune, and Conditional Access. Policy-based device management is where modern IT actually happens.",
    "Writing occasionally for ApprenticeWatch about what the early-career IT journey really looks like.",
  ],

  testimonials: [
    { quote: "Fast, thorough, and quietly professional. Exactly what you want from an engineer.", who: "MSP colleague" },
    { quote: "Calm under pressure, clear on comms. Picked up Entra and Intune genuinely quickly.", who: "Senior engineer" },
  ],

  social: [
    { name: "LinkedIn", href: "https://linkedin.jovandhillon.com", hint: "linkedin.jovandhillon.com" },
    { name: "GitHub",   href: "https://github.com/jovandhillon17", hint: "@jovandhillon17" },
    { name: "Email",    href: "mailto:hello@jovandhillon.com",     hint: "hello@jovandhillon.com" },
  ],
};

window.CONTENT = CONTENT;
