/**
 * Centralised static content for the TIS homepage.
 * Keeping copy + structure here keeps section components presentational
 * and makes the page easy to update without touching layout code.
 */

export const site = {
  name: "Tulas International School",
  shortName: "TIS",
  location: "Dehradun, Uttarakhand",
  tagline: "Where young minds learn to lead.",
  email: "admissions@tis.edu.in",
  phone: "+91 90000 00000",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Life at TIS", href: "#why" },
  { label: "Voices", href: "#voices" },
  { label: "Admissions", href: "#admissions" },
];

export const hero = {
  eyebrow: "Admissions open for 2026–27",
  title: ["Shaping curious minds", "into global", "changemakers."],
  subtitle:
    "A future-ready international school in the foothills of the Himalayas, blending academic rigour with character, creativity and compassion.",
  primaryCta: { label: "Apply for admission", href: "#admissions" },
  secondaryCta: { label: "Explore academics", href: "#academics" },
  highlights: ["CBSE & international curriculum", "25-acre green campus", "1:12 teacher ratio"],
};

export const stats = [
  { value: 25, suffix: "+", label: "Acre green campus" },
  { value: 1200, suffix: "+", label: "Students nurtured" },
  { value: 98, suffix: "%", label: "Board pass rate" },
  { value: 40, suffix: "+", label: "Clubs & activities" },
];

export const about = {
  eyebrow: "Who we are",
  title: "An education that reaches beyond the classroom.",
  body: "At Tulas International School we believe learning should be alive — rooted in enquiry, driven by curiosity and measured by the confidence a child carries into the world. Our educators design experiences that balance strong fundamentals with the creativity and resilience tomorrow demands.",
  points: [
    "Enquiry-led, concept-first teaching across every grade.",
    "Modern labs, maker spaces, performing-arts and sports facilities.",
    "Pastoral care and well-being woven into everyday school life.",
  ],
};

export const programs = [
  {
    icon: "Sprout",
    title: "Early Years",
    grades: "Nursery – KG",
    description:
      "A play-based foundation where children explore, question and discover through guided, joyful learning.",
  },
  {
    icon: "BookOpen",
    title: "Primary School",
    grades: "Grades 1 – 5",
    description:
      "Strong literacy and numeracy built alongside the arts, sport and values that shape confident learners.",
  },
  {
    icon: "FlaskConical",
    title: "Middle School",
    grades: "Grades 6 – 8",
    description:
      "Interdisciplinary projects and hands-on science that turn curiosity into real understanding.",
  },
  {
    icon: "GraduationCap",
    title: "Senior School",
    grades: "Grades 9 – 12",
    description:
      "Rigorous academics with structured career guidance and global university readiness.",
  },
];

export const features = [
  {
    icon: "Globe2",
    title: "Global curriculum",
    description: "A curriculum benchmarked to international standards while rooted in Indian values.",
  },
  {
    icon: "Users",
    title: "Mentors, not just teachers",
    description: "A 1:12 teacher-to-student ratio means every child is truly seen and supported.",
  },
  {
    icon: "Palette",
    title: "Arts & innovation",
    description: "Dedicated studios for music, dance, theatre, robotics and design thinking.",
  },
  {
    icon: "Trophy",
    title: "Sport for everyone",
    description: "From football fields to a 25-metre pool — fitness and teamwork for all.",
  },
  {
    icon: "Leaf",
    title: "Green campus",
    description: "A 25-acre sustainable campus in the clean air of the Himalayan foothills.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe & caring",
    description: "Counsellors, CCTV and trained staff keep every student secure and heard.",
  },
];

export const testimonials = [
  {
    quote:
      "TIS didn't just prepare my daughter for exams — it prepared her for life. She walks into any room with confidence.",
    name: "Priya Nair",
    role: "Parent, Grade 9",
  },
  {
    quote:
      "The teachers here actually know me. I came in shy and I'm leaving as the captain of the robotics team.",
    name: "Arjun Mehta",
    role: "Student, Grade 12",
  },
  {
    quote:
      "A campus that feels like a community. The balance of academics, sport and the arts is exactly what we wanted.",
    name: "Ritu & Sameer Kapoor",
    role: "Parents, Grade 5",
  },
];

export const admissions = {
  eyebrow: "Admissions 2026–27",
  title: "Begin your child's journey at TIS.",
  body: "Seats are limited across grades. Share your details and our admissions team will guide you through campus tours, assessments and enrolment.",
  cta: { label: "Request a callback", href: "#admissions" },
  steps: [
    { step: "01", title: "Enquire", text: "Submit the admissions enquiry form online." },
    { step: "02", title: "Visit", text: "Tour the campus and meet our faculty." },
    { step: "03", title: "Assess", text: "A friendly interaction to understand your child." },
    { step: "04", title: "Enrol", text: "Complete the formalities and welcome aboard." },
  ],
};

export const footer = {
  blurb:
    "Tulas International School — a future-ready, co-educational school nurturing confident, compassionate global citizens.",
  columns: [
    {
      title: "School",
      links: ["About TIS", "Academics", "Faculty", "Campus", "Careers"],
    },
    {
      title: "Admissions",
      links: ["Apply online", "Fee structure", "Scholarships", "Transport", "FAQs"],
    },
    {
      title: "Connect",
      links: ["Contact us", "Visit campus", "Newsletter", "Events", "Blog"],
    },
  ],
};
