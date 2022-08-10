<script>
  import { image, filter, transforms } from "../store";

  let img;
  image.subscribe((i) => {
    img = i;
  });

  const saveImage = () => {
    setTimeout(() => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.filter = `brightness(${$filter.brightness}%) saturate(${$filter.saturate}%) sepia(${$filter.sepia}%) contrast(${$filter.contrast}%)
      blur(${$filter.blur}px) grayscale(${$filter.grayscale}%) hue-rotate(${$filter.hueRotate}deg) opacity(${$filter.opacity}%) invert(${$filter.invert}%)
      `;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      if ($transforms.rotation !== 0) {
        ctx.rotate(($transforms.rotation * Math.PI) / 180);
      }
      ctx.scale($transforms.flipX, $transforms.flipY);

      console.log(canvas);

      ctx.drawImage(
        img,
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );

      const link = document.createElement("a");
      link.download = img.name;
      link.href = canvas.toDataURL();
      console.dir(img);
      link.click();
    });
  };
</script>

<div class="dialog-content">
  <button class="export" on:click={saveImage}> Export </button>

  <img
    class="img"
    style=" filter : 
        brightness({$filter.brightness}%)
        contrast({$filter.contrast}%)
        blur({$filter.blur}px)
        grayscale({$filter.grayscale}%)
        hue-rotate({$filter.hueRotate}deg)
        sepia({$filter.sepia}%)
        saturate({$filter.saturate}%)
        opacity({$filter.opacity}%)
        invert({$filter.invert}%) ;

          transform :
        rotate({$transforms.rotation}deg)
        scale( {$transforms.flipX} , {$transforms.flipY} )
     "
    src={img.src}
    alt="img"
  />
</div>

<style>
  .img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
    border-radius: 6px;
    z-index: 2;
  }

  .dialog-content {
    grid-column-start: 2;
    max-height: 500px;
    position: relative;

    display: grid;
    grid-template-rows: 100%;
    justify-items: center;
    align-items: center;
    overflow: hidden;
  }
  .dialog-content .export {
    position: absolute;
    z-index: 1;
    padding: 0.5rem 2rem;
    transform: translateY(20px);
    transition: transform 400ms ease;
    color: white;
    opacity: 0;
  }
  .dialog-content:hover .export {
    z-index: 3;
    opacity: 1;
    transform: translateY(0);
  }
</style>
