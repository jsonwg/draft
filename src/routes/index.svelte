<script>
  import Header from '$components/Header.svelte';
  import Container from '$components/Container.svelte';
  import Modal from '$components/Modal.svelte';
  import Timer from '$components/Timer.svelte';
</script>

<svelte:head>
  <title>Pomodoro</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

    :root {
      font-family: 'DM Mono', monospace;

      --bg: #1a1a1c;
      --bg2: #4e4e50;
      --red1: #c3083f;
      --red2: #940741;
      --orange: #ef7f00;
    }

    html,
    body {
      margin: 0;
      min-height: 100%;
      background-image: linear-gradient(to bottom right, var(--red1) 20%, var(--orange) 100%);
    }
  </style>
</svelte:head>

<main>
  <Header />
  <Modal />
  <section class="wrapper">
    <Timer />
    <Container />
  </section>
</main>

<style>
  .wrapper {
    display: grid;
    margin: 2vh;
    height: 90vh;
    gap: 2vh;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'timer card';
  }

  @media (max-width: 810px) {
    .wrapper {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        'timer '
        'card';
    }
  }
</style>
