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
    display: block;
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
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-shadow: 0px 0px #00000000;

    border-style: solid;
    border-width: 0.25vh;
    border-image: linear-gradient(to right, var(--red1), var(--orange)) 1;
  }
</style>
