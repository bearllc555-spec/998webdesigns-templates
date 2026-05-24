import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Quietfield",
    legalName: "Quietfield Yoga Collective",
    address: "37 Riverside Lane\nHudson, NY 12534",
    phone: "(518) 555-0186",
    email: "studio@quietfield.example",
    hours: [
      "Mon to Fri, 6am to 8:30pm",
      "Sat to Sun, 8am to 5pm",
      "The studio is silent fifteen minutes before each class",
    ],
    socials: [
      { label: "Instagram", icon: "instagram", href: "#" },
    ],
  },
  hero: {
    eyebrow: "Hudson, New York",
    headline: "A quieter way to begin.",
    sub: "A small yoga studio in a converted river-side workshop. Hatha, Yin, and slow Vinyasa, taught by four teachers who teach the way they practice.",
    secondaryLink: {
      label: "Class descriptions",
      href: "/mockups/quietfield-yoga/classes",
    },
  },
  services: {
    sectionLabel: "Practice",
    sectionHeadline: "Four classes. One bench of teachers.",
    sectionSub:
      "We keep the schedule small on purpose. Every class is taught by a senior teacher. There are no fill-ins.",
    items: [
      { name: "Hatha, slow and standing", summary: "Long holds, careful alignment, breath as the metronome." },
      { name: "Yin, the long pauses", summary: "Floor-only, four to five minutes per shape, propped to soften." },
      { name: "Slow Vinyasa", summary: "Linked sequences, breath-led, three or four shapes per minute." },
      { name: "Restorative and silence", summary: "Six to eight shapes, silently held. Tuesday evenings only." },
    ],
  },
  about: {
    eyebrow: "The studio",
    headline: "An old riverside workshop, sanded and waxed.",
    body: [
      "Quietfield opened in 2019 in a 1912 woodworking shop the previous owner had left behind. We kept the floors. We refinished the floors. We have not done much else.",
      "The studio holds fourteen mats. Classes cap at twelve, never thirteen. There is no music during practice and no schedule on the wall. Both are intentional.",
    ],
    stats: [
      { label: "Year opened", value: "2019" },
      { label: "Class cap", value: "12 mats" },
      { label: "Teachers", value: "Four senior" },
    ],
  },
  testimonials: [
    {
      quote:
        "I came in after twenty years away from yoga and was treated like someone who belonged. The teacher did not draw attention to me. Nothing did.",
      name: "Elena R.",
      role: "New student, 2025",
    },
    {
      quote:
        "Yin class on Thursday is the slowest hour of my week. I have started to think of it as the only hour, and the rest of the week as the gap between.",
      name: "Sam W.",
      role: "Student since 2022",
    },
    {
      quote:
        "No music. No mirrors. The teacher walks the room in slippered feet and says the next thing when the room is ready for it.",
      name: "Marcia D.",
      role: "Teacher, two studios down",
    },
  ],
  ctaBanner: {
    headline: "Begin again, slowly.",
    sub: "Your first class is on the house. Sign up by the door, or book a mat in advance.",
    cta: {
      label: "Reserve a mat",
      href: "/mockups/quietfield-yoga/schedule",
    },
  },
  footer: {
    blurb:
      "A small yoga collective on the river in Hudson, NY. Slow Hatha, Yin, slow Vinyasa, and restorative practice. The floor is original. The class cap is twelve.",
  },
};

export const weeklySchedule = [
  {
    day: "Monday",
    rows: [
      { time: "6:30am", title: "Hatha, slow and standing", teacher: "Maya" },
      { time: "9:00am", title: "Slow Vinyasa", teacher: "Jonas" },
      { time: "5:30pm", title: "Yin, the long pauses", teacher: "Petra" },
    ],
  },
  {
    day: "Tuesday",
    rows: [
      { time: "6:30am", title: "Slow Vinyasa", teacher: "Jonas" },
      { time: "12:15pm", title: "Hatha, slow and standing", teacher: "Maya" },
      { time: "7:00pm", title: "Restorative and silence", teacher: "Anne" },
    ],
  },
  {
    day: "Wednesday",
    rows: [
      { time: "7:00am", title: "Hatha, slow and standing", teacher: "Anne" },
      { time: "5:30pm", title: "Slow Vinyasa", teacher: "Jonas" },
    ],
  },
  {
    day: "Thursday",
    rows: [
      { time: "6:30am", title: "Yin, the long pauses", teacher: "Petra" },
      { time: "9:00am", title: "Slow Vinyasa", teacher: "Maya" },
      { time: "5:30pm", title: "Yin, the long pauses", teacher: "Petra" },
    ],
  },
  {
    day: "Friday",
    rows: [
      { time: "6:30am", title: "Hatha, slow and standing", teacher: "Maya" },
      { time: "12:15pm", title: "Slow Vinyasa", teacher: "Jonas" },
    ],
  },
  {
    day: "Saturday",
    rows: [
      { time: "9:00am", title: "Slow Vinyasa", teacher: "Jonas" },
      { time: "11:00am", title: "Hatha, slow and standing", teacher: "Anne" },
    ],
  },
  {
    day: "Sunday",
    rows: [
      { time: "9:30am", title: "Yin, the long pauses", teacher: "Petra" },
      { time: "11:15am", title: "Slow Vinyasa", teacher: "Maya" },
    ],
  },
];
