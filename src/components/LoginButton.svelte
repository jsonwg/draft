<script>
  import Button from './Button.svelte';
  import { modalOpen } from './stores.js';

  let loggedIn = false;

  const login = () => {
    $modalOpen = true;
  };

  const signOut = () => {
    loggedIn = false;
    console.log('Signed out');
  };
</script>

{#if !loggedIn}
  <Button action={login} size={2.5}>Login</Button>
{:else}
  <Button action={signOut} size={2.5}>Sign Out</Button>
{/if}
