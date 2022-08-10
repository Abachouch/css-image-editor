<script>
  import { filter } from "../store";
</script>

<div class="filters">
  <label for="Contrast" class="custom-title">Contrast </label>
  <input type="range" bind:value={$filter.contrast} min="0" max="200" />
  <span>{$filter.contrast}</span>

  <label for="brightness" class="custom-title">brightness </label>
  <input
    type="range"
    bind:value={$filter.brightness}
    min="0"
    max="200"
    prefix="%"
  />
  <span>{$filter.brightness}</span>

  <label for="Saturation" class="custom-title">Saturation </label>
  <input type="range" bind:value={$filter.saturate} min="0" max="200" />
  <span>{$filter.saturate}</span>

  <label for="Sepia" class="custom-title">Sepia </label>
  <input type="range" bind:value={$filter.sepia} min="0" max="100" />
  <span>{$filter.sepia}</span>

  <label for="Blur" class="custom-title">Blur </label>
  <input type="range" bind:value={$filter.blur} min="0" max="100" />
  <span>{$filter.blur}</span>

  <label for="hueRotation" class="custom-title">HueRotation </label>
  <input type="range" bind:value={$filter.hueRotate} min="0" max="100" />
  <span>{$filter.hueRotate}</span>

  <label for="invert" class="custom-title">Invert</label>
  <input type="range" bind:value={$filter.invert} min="0" max="100" />
  <span>{$filter.invert}</span>

  <label for="grayscale" class="custom-title">Grayscale</label>
  <input type="range" bind:value={$filter.grayscale} min="0" max="100" />
  <span>{$filter.grayscale}</span>

  <label for="opacity" class="custom-title">Opacity</label>
  <input type="range" bind:value={$filter.opacity} min="0" max="100" />
  <span>{$filter.opacity}</span>
</div>

<style>
  .filters {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
  }
  label {
    font-size: 0.75rem;
  }
</style>
