<script>
  export let action;
  export let size;
</script>

<button on:click={action} style="font-size: {size}vh">
  <slot />
</button>

<style>
  button {
    font-family: 'Odin Rounded';
    padding: 0.25vh 2vh;

    color: white;
    background: transparent;

    border-style: solid;
    border-width: 0.25vh;
    border-image: linear-gradient(to right, var(--red1), var(--orange)) 1;
    outline: none;
  }
</style>
