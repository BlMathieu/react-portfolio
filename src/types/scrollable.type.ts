export const SCROLLABLE_PROPERTIES = {
    home: "home",
    profil: "profil",
    stack: "stack",   
    projects: "projects",
    contact: "contact",
} as const;

export const SCROLLABLE_KEYS = Object.keys(SCROLLABLE_PROPERTIES);
export type I_Scrollable = keyof typeof SCROLLABLE_PROPERTIES;
export type I_ScrollableComponent = {
    id: I_Scrollable;
}