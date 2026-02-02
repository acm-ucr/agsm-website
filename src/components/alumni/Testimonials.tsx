const Testimonials = (props: {  }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
        <div className="bg-gradient-to-r from-white to-agsm-blue-100 p-4">
            <h2 className="text-center text-4xl font-bold text-agsm-blue-200 font-agsm-main">TESTIMONIALS</h2>
            </div>
        <div className="bg-agsm-yellow-100 flex flex-row max-w-2xl mx-auto shadow-xl p-6 gap-4">
            <img src="board/Sheetal.webp" alt="sheetal" className="w-40 h-40 rounded-lg object-cover"/>
            <div className="p-4 flex flex-col gap-4">
                <p className="text-agsm-blue-200 font-bold font-agsm-main text-2xl">Name</p>
                <h2 className="font-agsm-main">"Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Illum dolorum recusandae, 
                    nisi voluptate ipsa nihil beatae animi voluptatum 
                    quis eligendi. Cumque ipsam nesciunt, vitae dolor nihil 
                    illo? Mollitia, molestiae cumque!"</h2>
            </div>
        </div>
    </div>
  );
};

export default Testimonials;
