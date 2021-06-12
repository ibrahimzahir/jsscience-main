import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="mt-8 bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p className="text-sm tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            &copy; {yearNow} All Rights Reserved. JS & Science
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a> */}
            Made with ❤️
          </div>
        </div>
      </Container>
    </footer>
  );
}
