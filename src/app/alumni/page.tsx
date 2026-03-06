import TestimonialsCard from "@/components/alumni/TestimonialsCard";
import TestimonialsHeader from "@/components/alumni/Testimonials";
import AlumniImage from "../../../public/board/Sheetal.webp";
import Header from "@/components/Header";

const Alumni = () => {
  return (
    <div className="flex w-full flex-col">
      <Header text={"ALUMNI"} />
      <TestimonialsHeader />
      <TestimonialsCard
        headshot={AlumniImage}
        name="Sheetal Janala"
        testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum recusandae, nisi voluptate ipsa nihil 
      beatae animi voluptatum quis eligendi."
      />
    </div>
  );
};

export default Alumni;
