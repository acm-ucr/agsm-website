import BoardMap from "@/components/board/BoardMap";
import Header from "@/components/Header";

export default function BoardPage() {
  return (
    <div className="flex w-full flex-col">
      <Header text={"MEET THE BOARD"} />
      <BoardMap />
    </div>
  );
}
