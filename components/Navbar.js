import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <Image src="/logo.png" width={130} height={75} alt="Star wars logo" />
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/films">
        <a>SW Movies</a>
      </Link>
    </nav>
  );
};

export default Navbar;
