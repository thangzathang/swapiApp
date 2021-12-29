import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <Image src="/logo.png" width={130} height={75} alt="Star wars logo" />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/films">
        <a>Movies</a>
      </Link>
    </nav>
  );
};

export default Navbar;
