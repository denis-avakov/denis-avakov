import Link from 'next/link';
import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Denis Avakov">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center text-center">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-fuchsia-300 md:text-8xl">
          Page Not Found
        </h1>

        <p className="mb-8 text-gray-600">
          Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on
          this site.
        </p>

        <Link href="/">
          <a className="mx-auto w-64 rounded-md bg-gray-200 p-1 text-center font-bold text-black sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
