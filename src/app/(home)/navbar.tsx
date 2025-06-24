import Link from "next/link";
import Image from "next/image";
import SearchInput from "@/app/(home)/search-input";

const Navbar = () => {
  return (
    <div className={"flex items-center justify-between h-full w-full"}>
      <div className={"flex gap-3 pr-6 items-center"}>
        <Link href="/">
          <Image
            src={"/cloudquill.svg"}
            alt={"Cloud Quill logo"}
            width={180}
            height={180}
            className={"pt-2"}
          />
        </Link>
      </div>
      <SearchInput />
      <div />
    </div>
  );
};
export default Navbar;
