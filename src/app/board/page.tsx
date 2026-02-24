import Header from "@/components/board/Header";
import Card from "@/components/board/Card";

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 p-10">
      <Header title="Executives" />
      <div className="flex flex-wrap justify-center gap-10">
        <Card
          name="Sheetal Janala"
          role="President"
          image="/board/Sheetal.webp"
        />
      </div>
    </div>
  );
}
