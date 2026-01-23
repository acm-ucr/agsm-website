const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-agsm-blue-300 flex w-2/3 flex-col items-center gap-4 p-10">
      <div className="bg-agsm-blue-200 w-1/2 p-5 text-center text-xs text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="bg-agsm-blue-100 w-full rounded-lg p-5 text-center text-xs font-bold">
          {props.text3}
        </div>
        <div className="bg-agsm-blue-100 w-full rounded-lg p-5 text-center text-xs">
          {props.text3}
        </div>
      </div>
      <div className="bg-agsm-yellow-200 w-1/2 p-5 text-center text-xl font-bold">
        {props.text2}
      </div>
    </div>
  );
};

export default Example;
