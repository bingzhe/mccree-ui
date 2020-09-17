import { tuple } from "./type";

const ColorTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type ColorType = typeof ColorTypes[number];
