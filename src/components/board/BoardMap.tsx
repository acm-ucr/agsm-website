import Card from "@/components/board/Card";
import Header from "@/components/board/Header";
import { board } from "@/data/Board";
import { executives } from "@/data/Board";
import { operations } from "@/data/Board";

const BoardMap = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-8">
      <div className="flex w-screen flex-col items-center justify-center gap-16 py-16">
        <Header title="Executives" />
        <div className="flex w-full flex-row justify-center gap-16">
          {executives.map((member) => (
            <Card
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
            <Card
              key={member.name}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-6 px-4">
        <div className="flex flex-col items-center gap-2">
          <Header title="Marketing" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(0, 1).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Header title="Outreach" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(1, 2).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Header title="Finance" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(2, 3).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Header title="Communications" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(3, 4).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card key={index} name={name} role={position} image={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMap;
