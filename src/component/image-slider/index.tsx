import { useState, useMemo } from "react";
import frontMenu from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = () => {
  const [count, setCount] = useState<number>(0);

  // Memoize the current frontMenu item to prevent unnecessary recalculations
  const currentItem = useMemo(() => frontMenu[count], [count]);

  // Handle next item
  const handleNext = () => {
    setCount((prev) => (prev + 1) % frontMenu.length);
  };

  // Handle previous item
  const handlePrev = () => {
    setCount((prev) => (prev - 1 + frontMenu.length) % frontMenu.length);
  };

  // If frontMenu is empty, return early
  if (frontMenu.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex justify-center items-center w-full h-[40vh] my-10">
      <div className="flex justify-between items-center w-[95%] md:w-[40%] bg-white bg-opacity-30 h-full rounded-2xl border-zinc-500 border-[1px] p-5">
        {/* Previous Arrow */}
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={handlePrev}
        />

        {/* Render current frontMenu item */}
        <div className="flex flex-col justify-center items-center w-[80%]">
          <h2 className="font-extrabold font- text-xl">{currentItem.title}</h2>
          <img
            src={currentItem.img}
            alt="Front-Image"
            className="rounded-3xl max-w-full max-h-[30vh] object-cover"
          />
          <div className="text-gray-500 italic">"{currentItem.description}"</div>
        </div>

        {/* Next Arrow */}
        <IoIosArrowForward
          className="text-2xl cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
