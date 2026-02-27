import Header from "@/components/board/Header";
import BoardCard from "@/components/board/Card";
// executives
import Sheetal from "@/public/board/Sheetal.webp";
import Kazi from "@/public/board/Kazi.webp";
import Manshavi from "@/public/board/Manshavi.webp";
// operations
import Natalie from "@/public/board/Natalie.webp";
import Kathiroli from "@/public/board/Kathiroli.webp";

const executives = [
  { image: Sheetal, name: "Sheetal Janala", position: "President" },
  { image: Kazi, name: "Kazi Nahian", position: "Vice President" },
  { image: Manshavi, name: "Manshavi Agarwal", position: "Vice President" },
];

const operations = [
  { image: Natalie, name: "Natalie Trinh", position: "Director" },
  { image: Kathiroli, name: "Kathiroli Vasu", position: "Executive" },
];

export default function BoardPage() {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-16 py-16">
      <Header title="Executives" />
      <div className="flex w-full flex-row justify-center gap-16">
        {executives.map((member) => (
          <BoardCard
            key={member.name}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
      <Header title="Operations" />
      <div className="flex w-full flex-row justify-center gap-16">
        {operations.map((member) => (
          <BoardCard
            key={member.name}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
}
