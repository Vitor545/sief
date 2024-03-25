import Card from "@/components/card";
import GroupButtons from "@/components/group_buttons";

export default function Home() {
  return (
    <main className="container p-16 pt-28 flex flex-col gap-6">
      <GroupButtons />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card />
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
