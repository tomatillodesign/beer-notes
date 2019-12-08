

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "_")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}


export function getBrewery( brewery_slug ) {

     

     return brewery_slug;

}
