import Testimonials from "@/components/alumni/Testimonials";
import AlumniImage from "../../../public/board/Sheetal.webp";
const Alumni = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Testimonials
        headshot={AlumniImage}
        name="Sheetal Janala"
        testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum recusandae, nisi voluptate ipsa nihil 
      beatae animi voluptatum quis eligendi."
      />
    </div>
  );
};

export default Alumni;
