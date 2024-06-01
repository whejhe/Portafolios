// utils/importTechIcons.js

export function importTechIcons(r) {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace("../assets/icons/", "")] = r(item);
    });
    return images;
}
