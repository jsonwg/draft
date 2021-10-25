<script>
  import LoginButton from './LoginButton.svelte';
  import { modalOpen } from './stores.js';
</script>

<div class="header">
  <div class="header--name">Placeholder</div>
  <div class="header--login">
    <LoginButton />
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6vh;
    width: 100%;
    font-family: 'Odin Rounded';
    background-color: #1a1a1c;
    box-shadow: 0 0 20px black;
  }

  .header--name {
    margin-left: 10%;
    font-size: 5vh;
    color: white;
  }

  .header--login {
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    .header--name {
      margin-left: 4%;
      font-size: 3vh;
    }
    .header--login {
      margin-right: 4%;
    }
  }
</style>
