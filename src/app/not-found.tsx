import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center p-12 text-center">
      <div className="text-agsm-blue-200 p-6 text-9xl font-bold">404</div>
      <div className="p-6 text-3xl">PAGE NOT FOUND</div>
      <div className="p-6">
        <button className="bg-agsm-blue-200 rounded-md px-6 py-2 text-xl text-white">
          <Link href="/">GO HOME</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
