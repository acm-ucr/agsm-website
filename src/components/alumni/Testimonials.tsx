const Testimonials = (props: {}) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="to-agsm-blue-100 bg-gradient-to-r from-white p-4">
        <h2 className="text-agsm-blue-200 font-agsm-main text-center text-4xl font-bold">
          TESTIMONIALS
        </h2>
      </div>
      <div className="bg-agsm-yellow-100 mx-auto flex max-w-2xl flex-row gap-4 p-6 shadow-xl">
        <img
          src="board/Sheetal.webp"
          alt="sheetal"
          className="h-40 w-40 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-4 p-4">
          <p className="text-agsm-blue-200 font-agsm-main text-2xl font-bold">
            Name
          </p>
          <h2 className="font-agsm-main">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolorum recusandae, nisi voluptate ipsa nihil beatae animi
            voluptatum quis eligendi. Cumque ipsam nesciunt, vitae dolor nihil
            illo? Mollitia, molestiae cumque!"
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
