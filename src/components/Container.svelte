<div><slot /></div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
    box-shadow: 1.5em 1em 10px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    border: solid 0.5vh transparent;
    padding: 10px;
    background-clip: padding-box;
    outline: 1vh solid var(--bg);
    outline-offset: 10;
    margin: 1vh;
  }

  @media (max-width: 768px) {
    div {
      box-shadow: 0.9em 0.8em 10px rgba(0, 0, 0, 0.7);
    }
  }
</style>
