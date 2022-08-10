<script>
  import { filter, image } from "../store";
  export let preset;

  const setPreset = () => {
    filter.set({ ...preset.filters });
  };
</script>

<div
  class="preset"
  on:click={() => {
    setPreset();
  }}
>
  <div class="img-wraper">
    {#if $image}
      <img
        class="img"
        src={$image.src}
        alt={"filter: " + preset.title}
        style="filter:
    
        brightness({preset.filters.brightness}%)
              contrast({preset.filters.contrast}%)
              blur({preset.filters.blur}px)
              grayscale({preset.filters.grayscale}%)
              hue-rotate({preset.filters.hueRotate}deg)
              sepia({preset.filters.sepia}%)
              saturate({preset.filters.saturate}%)
              opacity({preset.filters.opacity}%)
              invert({preset.filters.invert}%)
        "
      />
    {/if}
  </div>
  <span class="title">{preset.title}</span>
</div>

<style>
  .preset {
    display: inline-block;
  }
  .img-wraper {
    width: 100%;
    height: 50px;
    background-color: var(--color-secondary);
    border-radius: 4px;
    overflow: hidden;
  }
  .img {
    image-rendering: optimizeQuality;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
  }
</style>
