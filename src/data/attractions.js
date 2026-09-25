// Attractions/landmarks — placeholder content.

export const attractions = [
  {
    slug: "westport-country-playhouse",
    name: "Westport Country Playhouse",
    type: "Attraction",
    neighborhood: "Downtown",
    description: [
      "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    quickFacts: [
      { label: "Admission", value: "Ticketed, varies by show" },
      { label: "Parking", value: "Free lot on-site" },
      { label: "Hours", value: "Box office Tue–Sat, 12–6pm" }
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
    description: [
      "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    quickFacts: [
      { label: "Admission", value: "Free" },
      { label: "Parking", value: "Free lot on-site" },
      { label: "Hours", value: "Mon–Sat, 9am–8pm" }
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
