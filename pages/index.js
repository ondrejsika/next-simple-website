import Link from "next/link";
export default () => {
  return (
    <>
      <h2>Ondrej Sika</h2>
      <p>Hello, I'm a sofware engineer, consultant and lecturer from Prague.</p>
      <p>
        You can reach me{" "}
        <Link href="/contact-me">
          <a>there</a>
        </Link>
        .
      </p>
    </>
  );
};
