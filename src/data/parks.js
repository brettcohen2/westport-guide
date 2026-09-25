// Parks — placeholder content. "description" is a single short blurb
// (not a multi-paragraph review) since this content is factual/informational
// rather than a personal narrative. "quickFacts" are freeform label/value
// pairs so the sidebar can show whatever's relevant per park.

export const parks = [
  {
    slug: "winslow-park",
    name: "Winslow Park",
    type: "Park",
    neighborhood: "Downtown",
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Parking", value: "Free lot off Long Lots Rd" },
      { label: "Amenities", value: "Trails, dog park, sports fields" },
      { label: "Hours", value: "Dawn to dusk" }
    ],
    goodToKnow: [
      "Dog park has a separate small-dog area",
      "Gets busy with youth sports games on weekend mornings"
    ],
    tags: ["Dog-friendly", "Trails", "Free"],
    address: "10 Long Lots Rd, Westport, CT",
    website: "westportct.gov/parks",
    photoColor: "#5C6B4F"
  },
  {
    slug: "sherwood-island-state-park",
    name: "Sherwood Island State Park",
    type: "Park",
    neighborhood: "Compo Beach",
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Parking", value: "Paid lot, CT resident discount" },
      { label: "Amenities", value: "Picnic areas, walking trails, beach access" },
      { label: "Hours", value: "8am to sunset" }
    ],
    goodToKnow: [
      "Non-resident parking fee is charged per car, cash or card",
      "Trails loop around for about a mile if you want a walk before the beach"
    ],
    tags: ["Kid-friendly", "Picnic spots", "Beach access"],
    address: "1 Sherwood Island Connector, Westport, CT",
    website: "ct.gov/deep/sherwoodisland",
    photoColor: "#3B5A6B"
  }
];

export function getParkBySlug(slug) {
  return parks.find(p => p.slug === slug);
}
