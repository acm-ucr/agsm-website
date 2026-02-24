import Card from "@/components/board/Card";
export default function BoardPage() {
  return (
    <div className="flex gap-10 p-10">
      <Card
        name="Sheetal Janala"
        role="President"
        image="/board/Sheetal.webp"
      />
    </div>
  );
}
import Header from "@/components/board/Header";

const Board = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Header title="Executives" />
    </div>
  );
};

export default Board;
