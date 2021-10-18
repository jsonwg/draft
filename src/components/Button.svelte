<script>
  let clicked = false;

  export let action;
  export let size;
</script>

<button on:click={action} style="font-size: {size}vh">
  <slot />
</button>

<style>
  button {
    font-family: "DM Mono", monospace;
    padding: 0 2vh;
    outline: none;

    background-image: linear-gradient(
      to right,
      var(--red1) 0%,
      var(--orange) 51%,
      var(--red1) 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    border-style: solid;
    border-width: 0.25vh;
    border-image: linear-gradient(to right, var(--red1), var(--orange)) 1;

    animation-name: shift;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  @keyframes shift {
    from {
      background-position: to right;
      border-image: linear-gradient(to right, var(--red1), var(--orange)) 1;
    }

    66% {
      background-position: right center;
      border-image: linear-gradient(to left, var(--red1), var(--orange)) 1;
    }

    to {
      background-position: to right;
      border-image: linear-gradient(to right, var(--red1), var(--orange)) 1;
    }
  }
</style>
