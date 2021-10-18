<script>
  import Header from "./components/Header.svelte";
  import Container from "./components/Container.svelte";
</script>

<main>
  <Header />
  <section class="wrapper">
    <Container />
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
    grid-template-areas: "timer card";
  }

  @media (max-width: 768px) {
    .wrapper {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        "timer "
        "card";
    }
  }
</style>
