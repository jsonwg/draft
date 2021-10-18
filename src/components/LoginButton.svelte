<script>
  import Button from "./Button.svelte";

  let loggedIn = false;
  const size = 3;

  const login = () => {
    loggedIn = true;
    console.log("Logged in");
  };

  const signOut = () => {
    loggedIn = false;
    console.log("Signed out");
  };
</script>

{#if !loggedIn}
  <Button action={login} {size}>Login</Button>
{:else}
  <Button action={signOut} {size}>Sign Out</Button>
{/if}
