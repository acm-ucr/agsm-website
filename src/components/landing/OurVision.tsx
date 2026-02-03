const Vision = (props: { text1: string; text2: React.ReactNode }) => {
  return (
    <div className="font-cabin relative flex min-h-[500px] w-full items-center overflow-hidden bg-[#FFFBF5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-agsm-blue-100 absolute top-[25%] left-[4%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-300 absolute top-[20%] left-[18%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-200 absolute top-[45%] left-[11%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-200 absolute top-[55%] left-[-1.5%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-300 absolute top-[63.5%] left-[1.25%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-300 absolute top-[59%] left-[25%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-100 absolute top-[35%] left-[30%] h-12 w-12 rounded-lg" />
        <div className="bg-agsm-blue-200 absolute top-[27%] left-[32.88%] h-12 w-12 rounded-lg" />
      </div>

      <div className="relative flex w-full max-w-7xl justify-end">
        <div className="flex max-w-[475px] flex-col items-end text-right">
          <div className="text-agsm-blue-200 -translate-y-18 text-5xl font-bold">
            {" "}
            {props.text1}
          </div>
          <div className="text-lg text-[#3A3A3A]"> {props.text2}</div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
