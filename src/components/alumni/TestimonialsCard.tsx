import Image, { StaticImageData } from "next/image";

type Props = {
  headshot: StaticImageData;
  name: string;
  testimonial: string;
};

const TestimonialsCard = ({ headshot, name, testimonial }: Props) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="bg-agsm-yellow-100 mx-auto flex max-w-2xl flex-row gap-4 p-6 shadow-xl">
        <Image
          src={headshot}
          alt={name}
          className="h-40 w-40 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-4 p-4">
          <p className="text-agsm-blue-200 font-agsm-main text-2xl font-bold">
            {name}
          </p>
          <p className="font-agsm-main">"{testimonial}"</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
