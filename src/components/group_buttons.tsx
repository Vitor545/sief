import { Button } from "@/components/ui/button";

export default function GroupButtons() {
  return (
    <div className="flex items-center gap-2 max-[430px]:gap-1 flex-wrap">
      <Button className="max-[430px]:text-xs max-[430px]:w-full" variant={"default"}>Disponíveis</Button>
      <Button className="max-[430px]:text-xs max-[430px]:w-full" variant={"outline"}>Em andamento</Button>
      <Button className="max-[430px]:text-xs max-[430px]:w-full" variant={"outline"}>Concluídos</Button>
    </div>
  );
}
