// Beaches — placeholder content. Permit info gets its own field since
// resident-only access / paid stickers trip up newcomers and visitors
// constantly in CT beach towns — worth surfacing prominently.

export const beaches = [
  {
    slug: "compo-beach",
    name: "Compo Beach",
    type: "Beach",
    neighborhood: "Compo Beach",
    description: [
      "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    quickFacts: [
      { label: "Permit", value: "Resident sticker or daily non-resident fee" },
      { label: "Parking", value: "On-site lot, fills up by 11am on summer weekends" },
      { label: "Lifeguards", value: "Memorial Day to Labor Day" }
    ],
    tags: ["Kid-friendly", "Lifeguards", "Concession stand"],
    address: "Compo Beach Rd, Westport, CT",
    website: "westportct.gov/beaches",
    photoColor: "#3B5A6B"
  },
  {
    slug: "burying-hill-beach",
    name: "Burying Hill Beach",
    type: "Beach",
    neighborhood: "Green's Farms",
    description: [
      "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    quickFacts: [
      { label: "Permit", value: "Resident sticker required, no daily passes" },
      { label: "Parking", value: "Small lot, arrive early" },
      { label: "Lifeguards", value: "Memorial Day to Labor Day" }
    ],
    tags: ["Quieter", "Sunset views", "Resident-only"],
    address: "500 Hillandale Rd, Westport, CT",
    website: "westportct.gov/beaches",
    photoColor: "#8A7A68"
  }
];

export function getBeachBySlug(slug) {
  return beaches.find(b => b.slug === slug);
}
