import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-4 my-2">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <p className="font-semibold">Capitech Dictionary</p>
      </div>
    </Link>
  );
};

export default Navbar;
