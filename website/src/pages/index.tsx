import type { NextPage } from 'next';
import Container from 'components/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center">
        <h1 className="text-center text-9xl font-black text-fuchsia-300">
          Gonna make a sandwich brb..
        </h1>
      </main>
    </Container>
  );
};

export default Home;
