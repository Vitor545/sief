import Card from "@/components/card";
import GroupButtons from "@/components/group_buttons";


export default function Home() {
  return (
    <main className="container h-full p-16 pt-28 flex flex-col gap-6">
      <GroupButtons />
      <div className="grid grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
