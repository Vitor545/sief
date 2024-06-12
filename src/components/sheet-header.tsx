import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NextPage } from "next";
import Sidebar from "./sidebar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

interface Props {}

const SheetHeader: NextPage<Props> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 hover:opacity-75 transition">
      <HamburgerMenuIcon className="w-4 h-4 mr-4 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side='left' className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SheetHeader;
