const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-agsm-blue-100 flex w-2/3 flex-col items-center gap-6 p-10">
      <div className="bg-agsm-blue-200 text-agsm-blue-100 w-full p-5 text-center text-lg font-medium">
        {props.text1}
      </div>

      <div className="flex w-full flex-row gap-5">
        <div className="bg-agsm-blue-300 w-1/2 rounded-sm p-5 text-center text-lg font-bold text-black">
          {props.text2}
        </div>
        <div className="bg-agsm-blue-300 w-1/2 rounded-sm p-5 text-center text-lg text-black">
          {props.text2}
        </div>
      </div>

      <div className="bg-agsm-yellow-200 w-full p-6 text-center text-5xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
