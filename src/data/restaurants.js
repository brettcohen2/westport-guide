// Placeholder content — structured to match the field list agreed on with the client.
// Swap this file for a Sanity fetch once the schema is finalized (see README).

export const restaurants = [
  {
    slug: "the-whelk",
    name: "The Whelk",
    category: "Seafood",
    price: "$$$",
    neighborhood: "Downtown",
    score: 8,
    scoreExplainer: "Excellent seafood and a room that feels like an occasion, docked a couple points for portion size relative to price and for how loud it gets after 7pm on weekends.",
    review: [
      "Placeholder review copy — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    whatToOrder: ["Dish 1", "Dish 2", "Dish 3"],
    tags: ["Date night", "Outdoor seating", "Reservations recommended"],
    address: "Road, Westport, CT",
    website: "domain.com",
    photoColor: "#3B5A6B"
  },
  {
    slug: "blu-point-bar",
    name: "Blu Point Bar",
    category: "Raw bar",
    price: "$$",
    neighborhood: "Saugatuck",
    score: 7,
    scoreExplainer: "Great happy hour and a real neighborhood feel, but the kitchen is inconsistent outside of the raw bar menu.",
    review: [
      "Placeholder review copy — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    whatToOrder: ["Dish 1", "Dish 2"],
    tags: ["Casual", "Outdoor seating"],
    address: "Road, Westport, CT",
    website: "domain.com",
    photoColor: "#C4622D"
  },
  {
    slug: "little-barn",
    name: "Little Barn",
    category: "Bakery",
    price: "$",
    neighborhood: "Downtown",
    score: 9,
    scoreExplainer: "Consistently excellent pastries and coffee — the only reason it's not a 10 is the line on weekend mornings.",
    review: [
      "Placeholder review copy — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ],
    whatToOrder: ["Dish 1", "Dish 2", "Dish 3"],
    tags: ["Kid-friendly", "Cheap eats"],
    address: "Road, Westport, CT",
    website: "domain.com",
    photoColor: "#5C6B4F"
  },
  {
    slug: "rye-ridge-deli",
    name: "Rye Ridge Deli",
    category: "Sandwiches",
    price: "$$",
    neighborhood: "Saugatuck",
    score: 8,
    scoreExplainer: "The sandwich Westport didn't know it needed — simple menu, executed better than anywhere else in town.",
    review: [
      "Placeholder review copy — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    whatToOrder: ["Dish 1"],
    tags: ["Cheap eats", "Quick lunch"],
    address: "Road, Westport, CT",
    website: "domain.com",
    photoColor: "#8A7A68"
  },
  {
    slug: "green-farms-tavern",
    name: "Green's Farms Tavern",
    category: "American",
    price: "$$$",
    neighborhood: "Green's Farms",
    score: 6,
    scoreExplainer: "Reliable and comfortable, but nothing here will surprise you — solid choice when you can't decide, not a destination on its own.",
    review: [
      "Placeholder review copy — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    ],
    whatToOrder: ["Dish 1", "Dish 2"],
    tags: ["Family-friendly", "Reservations recommended"],
    address: "Road, Westport, CT",
    website: "domain.com",
    photoColor: "#B7AF9E"
  },
  {
    slug: "compo-clam-shack",
    name: "Compo Clam Shack",
    category: "Seafood",
    price: "$",
    neighborhood: "Compo Beach",
    score: 8,
    scoreExplainer: "Exactly what a beach clam shack should be — no notes, just don't expect anywhere to sit.",
    review: [
      "Placeholder review copy — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    whatToOrder: ["Dish 1", "Dish 2"],
    tags: ["Casual", "Beachfront", "Cheap eats"],
    address: "Road, Westport, CT",
    website: "domain.com",
    photoColor: "#3B5A6B"
  }
];

export function getAllTags() {
  const set = new Set();
  restaurants.forEach(r => r.tags.forEach(t => set.add(t)));
  return Array.from(set);
}

export function getRestaurantBySlug(slug) {
  return restaurants.find(r => r.slug === slug);
}
