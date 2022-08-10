import { writable } from "svelte/store";

export const image = writable();

export const filter = writable({
  contrast: 100,
  brightness: 100,
  saturate: 100,
  sepia: 0,
  blur: 0,
  hueRotate: 0,
  invert: 0,
  grayscale: 0,
  opacity: 100,
});

export const transforms = writable({
  rotation: 0,
  flipX: 1,
  flipY: 1,
});
