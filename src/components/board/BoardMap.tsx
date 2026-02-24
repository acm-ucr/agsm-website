import Card from "@/components/board/Card";
import Header from "@/components/board/Header";
import { board } from "@/data/Board";

const BoardMap = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-8">
      <div className="grid w-full max-w-4xl grid-cols-2 gap-6 px-4">
        <div className="flex flex-col items-center gap-2">
          <Header title="Marketing" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(0, 1).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card
                  key={index}
                  name={name}
                  position={position}
                  image={image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Header title="Outreach" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(1, 2).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card
                  key={index}
                  name={name}
                  position={position}
                  image={image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Header title="Finance" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(2, 3).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card
                  key={index}
                  name={name}
                  position={position}
                  image={image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Header title="Communications" />
          <div className="flex w-full flex-row justify-center gap-2">
            {board.slice(3, 4).map(({ image, name, position }, index) => (
              <div className="box-border w-48 p-2">
                <Card
                  key={index}
                  name={name}
                  position={position}
                  image={image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMap;
