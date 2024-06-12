import { NextPage } from "next";
import SidebarRoutes from "./sidebar-routes";

interface Props { }

const Sidebar: NextPage<Props> = ({ }) => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-background shadow-sm pt-6">
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    );
};

export default Sidebar;
