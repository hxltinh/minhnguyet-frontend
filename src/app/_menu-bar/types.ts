export const menuItems = ["Home"
    , "Brands"
    , "Factory"
    , "Packaging"
    , "Contact Us"] as const;

export type MenuItemName = typeof menuItems[number];
