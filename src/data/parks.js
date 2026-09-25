// Parks — placeholder content. Each park's "quickFacts" are freeform
// label/value pairs so the sidebar can show whatever's relevant
// (parking, amenities, dog policy) without forcing every entry into
// the same rigid field list.

export const parks = [
  {
    slug: "winslow-park",
    name: "Winslow Park",
    type: "Park",
    neighborhood: "Downtown",
    description: [
      "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    quickFacts: [
      { label: "Parking", value: "Free lot off Long Lots Rd" },
      { label: "Amenities", value: "Trails, dog park, sports fields" },
      { label: "Hours", value: "Dawn to dusk" }
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
    description: [
      "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    quickFacts: [
      { label: "Parking", value: "Paid lot, CT resident discount" },
      { label: "Amenities", value: "Picnic areas, walking trails, beach access" },
      { label: "Hours", value: "8am to sunset" }
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
