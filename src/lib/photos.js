import { existsSync } from "node:fs";
import { join } from "node:path";

// Returns the item with its photo path only if the file exists in /public,
// so a missing image falls back to the color block instead of breaking.
export function withPhoto(item) {
  if (!item.photo) return item;
  const file = join(process.cwd(), "public", item.photo);
  return existsSync(file) ? item : { ...item, photo: undefined };
}

export function withPhotos(items) {
  return items.map(withPhoto);
}
