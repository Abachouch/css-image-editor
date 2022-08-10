<script>
  import { transforms } from "../store";

  const rotateRight = () => {
    transforms.update((t) => {
      t.rotation += 90;
      return t;
    });
  };
  const rotateLeft = () => {
    transforms.update((t) => {
      t.rotation -= 90;
      return t;
    });
  };

  const flipY = () => {
    transforms.update((t) => {
      t.flipY *= -1;
      return t;
    });
  };

  const flipX = () => {
    transforms.update((t) => {
      t.flipX *= -1;
      return t;
    });
  };
</script>

<header class="dialog-header">
  <button class="control" on:click={rotateRight}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 22.5H12C11.6023 22.4996 11.221 22.3414 10.9398 22.0602C10.6586 21.779 10.5004 21.3977 10.5 21V12C10.5004 11.6023 10.6586 11.221 10.9398 10.9398C11.221 10.6586 11.6023 10.5004 12 10.5H21C21.3977 10.5004 21.779 10.6586 22.0602 10.9398C22.3414 11.221 22.4996 11.6023 22.5 12V21C22.4996 21.3977 22.3414 21.779 22.0602 22.0602C21.779 22.3414 21.3977 22.4996 21 22.5ZM12 12V21H21.0007L21 12H12ZM11.25 1.5L10.1925 2.5575L12.1275 4.5H8.25C6.8581 4.50159 5.52367 5.05522 4.53944 6.03944C3.55522 7.02367 3.00159 8.3581 3 9.75V13.5H4.5V9.75C4.50119 8.7558 4.89666 7.80267 5.59966 7.09966C6.30267 6.39666 7.2558 6.00119 8.25 6H12.1275L10.1925 7.9425L11.25 9L15 5.25L11.25 1.5Z"
        fill="black"
      />
    </svg>
    Rotate Right
  </button>

  <button class="control" on:click={rotateLeft}>
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 20V11C0.500397 10.6023 0.65856 10.221 0.939778 9.93978C1.221 9.65856 1.6023 9.5004 2 9.5H11C11.3977 9.5004 11.779 9.65856 12.0602 9.93978C12.3414 10.221 12.4996 10.6023 12.5 11V20C12.4996 20.3977 12.3414 20.779 12.0602 21.0602C11.779 21.3414 11.3977 21.4996 11 21.5H2C1.6023 21.4996 1.221 21.3414 0.939778 21.0602C0.65856 20.779 0.500397 20.3977 0.5 20ZM2 11L1.99925 20H11V11H2ZM11.75 0.5L12.8075 1.5575L10.8725 3.5H14.75C16.1419 3.50159 17.4763 4.05522 18.4606 5.03944C19.4448 6.02367 19.9984 7.3581 20 8.75V12.5H18.5V8.75C18.4988 7.7558 18.1033 6.80267 17.4003 6.09966C16.6973 5.39666 15.7442 5.00119 14.75 5H10.8725L12.8075 6.9425L11.75 8L8 4.25L11.75 0.5Z"
        fill="black"
      />
    </svg>

    Rotate Left
  </button>

  <button class="control" on:click={flipX}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5V13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H12V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2H12V4H15Z"
        fill="black"
        fill-opacity="0.5"
      />
      <path
        d="M10 0H8V18H10V0ZM2 5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H6V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H6V14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5Z"
        fill="black"
      />
    </svg>

    Flip Horizental
  </button>

  <button class="control" on:click={flipY}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V12H2V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H13C13.7956 18 14.5587 17.6839 15.1213 17.1213C15.6839 16.5587 16 15.7956 16 15V12H14V15Z"
        fill="black"
        fill-opacity="0.5"
      />
      <path
        d="M13 2C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V6H16V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H5C4.20435 0 3.44129 0.316071 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V6H4V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H13ZM18 10V8H0V10H18Z"
        fill="black"
      />
    </svg>

    Flip Vertical
  </button>
</header>

<style>
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .control {
    background-color: transparent;
    display: flex;
    font-size: 0.85rem;
    align-items: center;
    column-gap: 0.5rem;
  }
  .active {
    background-color: var(--color-btn-bg);
    color: var(--color-btn-txt);
  }
  .control svg path {
    fill: currentColor;
  }
</style>
