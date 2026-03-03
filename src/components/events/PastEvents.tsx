import Image, { StaticImageData } from "next/image";
const PastEvents = ({
  text1,
  text2,
  photo,
}: {
  text1: string;
  text2: string;
  photo: StaticImageData;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="bg-agsm-yellow-100 mt-10 mb-10 flex h-80 w-3/5 flex-row justify-center gap-4 border p-10 shadow-lg shadow-gray-500">
        <div className="relative flex h-60 w-4xl flex-row">
          <Image
            src={photo}
            alt={"photo of a lecture room with students in it"}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-agsm-blue-200 mt-5 flex w-2/3 flex-col gap-4 text-2xl font-extrabold">
            {text1}
          </div>
          <div className="text-l mt-5 text-gray-600">{text2}</div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
