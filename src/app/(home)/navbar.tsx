import Link from "next/link";
import Image from "next/image";
import SearchInput from "@/app/(home)/search-input";
import { UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <div className={"flex items-center justify-between h-full w-full"}>
      <div className={"flex gap-3 pb-2 items-center"}>
        <Link href="/">
          <Image
            src={"/cloudquill.svg"}
            alt={"Cloud Quill logo"}
            width={180}
            height={180}
            className={"pt-2 sm:w-12 sm:h-12 md:w-44 md:h-44"}
          />
        </Link>
      </div>
      <SearchInput />
      <UserButton />
    </div>
  );
};
export default Navbar;
