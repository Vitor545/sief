import { Button } from "@/components/ui/button";

export default function GroupButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant={"default"}>Disponíveis</Button>
      <Button variant={"outline"}>Em andamento</Button>
      <Button variant={"outline"}>Concluídos</Button>
    </div>
  );
}
