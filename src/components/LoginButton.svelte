<script>
  import Button from './Button.svelte';
  import { modalOpen } from './stores.js';

  let loggedIn = false;

  const size = 3;

  const login = () => {
    $modalOpen = true;
  };

  const signOut = () => {
    loggedIn = false;
    console.log('Signed out');
  };
</script>

{#if !loggedIn}
  <Button action={login} {size}>Login</Button>
{:else}
  <Button action={signOut} {size}>Sign Out</Button>
{/if}
