import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "./ui/button";

export interface ICheckButtonProps {
}

export default function CheckButton({ }: ICheckButtonProps) {
    return (
        <div className="flex flex-col gap-4 w-72">
            <ToggleGroup type="single">
                <ToggleGroupItem className="text-xl cursor-pointer" value="a">😡</ToggleGroupItem>
                <ToggleGroupItem className="text-xl cursor-pointer" value="b">🙁</ToggleGroupItem>
                <ToggleGroupItem className="text-xl cursor-pointer" value="c">😑</ToggleGroupItem>
                <ToggleGroupItem className="text-xl cursor-pointer" value="d">🙂</ToggleGroupItem>
                <ToggleGroupItem className="text-xl cursor-pointer" value="f">😀</ToggleGroupItem>
            </ToggleGroup>
            <Button variant={"outline"}>Marcar como concluído</Button>
            <div className="flex items-center gap-2">
                <Progress value={0} />
                <p className="text-neutral-400 text-sm">0%</p>
            </div>
        </div>
    );
}
