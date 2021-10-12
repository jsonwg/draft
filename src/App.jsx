import { Header, Container, Timer } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <section className="wrapper">
        <Container>
          <Timer />
        </Container>
        <Container className="card" value="Card" />
      </section>
    </>
  );
};

export default App;
