import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center gap-4 my-2">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <p className="font-semibold">Capitech Dictionary</p>
    </div>
  );
};

export default Navbar;
