import { tuple } from "./type";

export const ColorTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type ColorType = typeof ColorTypes[number];
