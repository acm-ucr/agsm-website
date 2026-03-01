import BoardMap from "@/components/board/BoardMap";
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
  { image: Sheetal, name: "Sheetal Janala", role: "President" },
  { image: Kazi, name: "Kazi Nahian", role: "Vice President" },
  { image: Manshavi, name: "Manshavi Agarwal", role: "Vice President" },
];

const operations = [
  { image: Natalie, name: "Natalie Trinh", role: "Director" },
  { image: Kathiroli, name: "Kathiroli Vasu", role: "Executive" },
];

export default function BoardPage() {
  return (
    <div className="bg-agsm-yellow-100 flex h-screen w-screen flex-col items-center justify-center">
      <BoardMap />
    <div className="flex w-screen flex-col items-center justify-center gap-16 py-16">
      <Header title="Executives" />
      <div className="flex w-full flex-row justify-center gap-16">
        {executives.map((member) => (
          <BoardCard
            key={member.name}
            image={member.image}
            name={member.name}
            role={member.role}
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
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}
