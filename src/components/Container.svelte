<div><slot /></div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1vh;
    background-color: var(--bg);
    background-clip: padding-box;
    border: solid 0.5vh transparent;

    outline: 1vh solid var(--bg);
    outline-offset: 10;
    box-shadow: 1em 0.5em 10px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    div {
      box-shadow: 0.5em 0.4em 6px rgba(0, 0, 0, 0.7);
    }
  }
</style>
