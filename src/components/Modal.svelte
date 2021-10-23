<script>
  import { fade, fly } from 'svelte/transition';
  import { modalOpen } from './stores.js';
</script>

{#if $modalOpen}
  <div class="login" in:fly={{ y: -300, duration: 800 }} out:fly={{ y: 300, duration: 800 }}>
    <p>Login</p>
  </div>
  <div class="login--cancel" on:click={() => ($modalOpen = false)} in:fade out:fade />
{/if}

<style>
  p {
    font-size: 5vh;
    margin: 0;
  }

  .login {
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    background-color: var(--bg);
    z-index: 1;
    top: 15%;
    left: 25%;
    height: 70%;
    width: 50%;
    color: white;

    border: solid 0.5vh;
    border-image: linear-gradient(to bottom right, var(--red1) 20%, var(--orange) 100%) 1;

    outline: 1vh solid var(--bg);
    outline-offset: 10;
    box-shadow: -5px 0 30px var(--red1), 5px 0 30px var(--orange);
  }

  .login--cancel {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 810px) {
    .login {
      top: 30%;
      left: 15%;
      height: 40%;
      width: 70%;
    }
  }
</style>
