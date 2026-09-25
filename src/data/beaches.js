// Beaches — placeholder content. Permit info gets its own field since
// resident-only access / paid stickers trip up newcomers and visitors
// constantly in CT beach towns — worth surfacing prominently.
// "description" is a single short blurb, not a multi-paragraph review.

export const beaches = [
  {
    slug: "compo-beach",
    name: "Compo Beach",
    type: "Beach",
    neighborhood: "Compo Beach",
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Permit", value: "Resident sticker or daily non-resident fee" },
      { label: "Parking", value: "On-site lot, fills up by 11am on summer weekends" },
      { label: "Lifeguards", value: "Memorial Day to Labor Day" }
    ],
    goodToKnow: [
      "Get there before 10am on summer weekends or the lot's full",
      "Non-resident daily passes are cash only at the booth"
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
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Permit", value: "Resident sticker required, no daily passes" },
      { label: "Parking", value: "Small lot, arrive early" },
      { label: "Lifeguards", value: "Memorial Day to Labor Day" }
    ],
    goodToKnow: [
      "No non-resident access — this one's locals only",
      "Best sunset spot in town, arrive an hour before"
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
