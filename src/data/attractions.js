// Attractions/landmarks — placeholder content. "description" is a single
// short blurb, not a multi-paragraph review.

export const attractions = [
  {
    slug: "westport-country-playhouse",
    name: "Westport Country Playhouse",
    type: "Attraction",
    neighborhood: "Downtown",
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Admission", value: "Ticketed, varies by show" },
      { label: "Parking", value: "Free lot on-site" },
      { label: "Hours", value: "Box office Tue–Sat, 12–6pm" }
    ],
    goodToKnow: [
      "Season runs spring through fall, check the site for current shows",
      "Some performances sell out — book ahead for weekends"
    ],
    tags: ["Date night", "Indoor", "Seasonal"],
    address: "25 Powers Ct, Westport, CT",
    website: "westportplayhouse.org",
    photoColor: "#C4622D"
  },
  {
    slug: "the-westport-library",
    name: "The Westport Library",
    type: "Attraction",
    neighborhood: "Downtown",
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Admission", value: "Free" },
      { label: "Parking", value: "Free lot on-site" },
      { label: "Hours", value: "Mon–Sat, 9am–8pm" }
    ],
    goodToKnow: [
      "Regularly hosts free talks and events, worth checking the calendar",
      "Quiet study spaces on the upper floor if downstairs is busy"
    ],
    tags: ["Free", "Kid-friendly", "Indoor"],
    address: "20 Jesup Rd, Westport, CT",
    website: "westportlibrary.org",
    photoColor: "#5C6B4F"
  }
];

export function getAttractionBySlug(slug) {
  return attractions.find(a => a.slug === slug);
}
