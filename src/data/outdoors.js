// Outdoors — parks and beaches merged into one category, since several
// Westport spots genuinely span both (Sherwood Island has trails AND a
// beach). "type" (Park/Beach) is kept per entry for display purposes
// (card subtitle, detail page label) even though they share one
// "category" ("Outdoors") for tab filtering on /explore.
// "description" is a single short blurb, not a multi-paragraph review.

export const outdoors = [
  {
    slug: "winslow-park",
    name: "Winslow Park",
    type: "Park",
    category: "Outdoors",
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
    category: "Outdoors",
    neighborhood: "Compo Beach",
    description: "Placeholder description — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quickFacts: [
      { label: "Parking", value: "Paid lot, CT resident discount" },
      { label: "Amenities", value: "Picnic areas, walking trails, beach access" },
      { label: "Hours", value: "8am to sunset" }
    ],
    goodToKnow: [
      "Non-resident parking fee is charged per car, cash or card",
      "The park's eastern stretch is officially named Alvord Beach — even most locals just call it East Beach"
    ],
    tags: ["Kid-friendly", "Picnic spots", "Beach access"],
    address: "1 Sherwood Island Connector, Westport, CT",
    website: "ct.gov/deep/sherwoodisland",
    photoColor: "#3B5A6B"
  },
  {
    slug: "compo-beach",
    name: "Compo Beach",
    type: "Beach",
    category: "Outdoors",
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
    category: "Outdoors",
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

export function getOutdoorBySlug(slug) {
  return outdoors.find(o => o.slug === slug);
}
