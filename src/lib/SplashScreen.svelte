<script>
  import { image } from "../store";

  function selectFile() {
    let imgSrc;
    const tmpImg = new Image();

    const fileDialog = document.createElement("input");
    fileDialog.type = "file";
    fileDialog.accept = "image/x-png,image/gif,image/jpeg,image/webp";
    fileDialog.click();

    fileDialog.onchange = (e) => {
      // @ts-ignore
      let file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        imgSrc = reader.result;
        tmpImg.src = imgSrc.toString();
        image.set(tmpImg);
      };
      reader.readAsDataURL(file);
    };
  }
</script>

<div class="upload">
  <svg
    class="upload-img"
    width="146"
    height="146"
    viewBox="0 0 146 146"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M136.875 26.6952V119.305H9.125V26.6952H136.875Z" fill="#2DCC9F" />
    <path
      d="M110.558 38.9683C108.205 38.4717 105.752 38.8365 103.646 39.996C101.539 41.1556 99.9187 43.033 99.0794 45.2866C98.2402 47.5402 98.238 50.0202 99.0731 52.2753C99.9082 54.5304 101.525 56.4107 103.63 57.5741C105.734 58.7375 108.187 59.1067 110.541 58.6144C112.894 58.1222 114.993 56.8012 116.455 54.8919C117.917 52.9826 118.645 50.6119 118.507 48.2111C118.368 45.8104 117.372 43.5391 115.7 41.8107C114.306 40.3742 112.516 39.3848 110.558 38.9683M82.6313 91.7062C74.3458 80.1844 66.0573 68.6641 57.7657 57.1453L20.8916 108.432H70.6228C74.6257 102.86 78.6316 97.2892 82.6405 91.7199M100.635 72.9999C92.1396 84.8077 83.6473 96.617 75.158 108.428H126.117C117.627 96.617 109.133 84.8077 100.635 72.9999Z"
      fill="white"
    />
  </svg>

  <h2>Select Image to start Editing</h2>
  <p>
    all code run in the client side ,so your images is never uploaded to server
  </p>
  <button class="upload-button" on:click={selectFile}> Select Image </button>
</div>

<style>
  .upload {
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 10px;
    background-image: url("data:image/svg+xml,%3csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%' height='100%' fill='none' rx='10' ry='10' stroke='%23D9D9D9' stroke-width='1' stroke-dasharray='11' stroke-dashoffset='32' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 10px;
    text-align: center;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .upload svg {
    margin-top: 2rem;
    opacity: 0.6;
    animation-name: bounce;
    animation-timing-function: linear;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }

  .upload button {
    color: white;
    margin-top: 4rem;
    padding: 1rem 3rem;
    font-weight: 500;
    font-size: 1.3rem;
    border-radius: 6px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  }
  .upload button:hover {
    box-shadow: 6px 7px 8px 3px rgba(0, 0, 0, 0.25);
  }
</style>
