import { ReactNode, useState } from "react";

import { twMerge } from "tailwind-merge";

import useLoopData from "hooks/useLoopData";

export const GM3Carousel = ({
  className = "",
  slides,
  perPage,
  speedS = 2,
  withDualSmallItems = false,
  smallItemClassName = "",
  bigItemClassName = "",
  isPaused = false,
  pauseOnMouseEnter = true,
  isVertical = false,
  withSmallItemsMaxSize = true,
  slideWrapperClassName = "duration-500",
}: {
  className?: string;
  slides: { content: ReactNode; key: string }[];
  speedS: number;
  perPage: number;
  withDualSmallItems?: boolean;
  smallItemClassName?: string;
  bigItemClassName?: string;
  isPaused?: boolean;
  pauseOnMouseEnter?: boolean;
  isVertical?: boolean;
  withSmallItemsMaxSize?: boolean;
  slideWrapperClassName?: string;
}) => {
  const [t, setT] = useState(false),
    // +2 for the flex-0 ones, speed is + 500ms for animation
    slidesSlice = useLoopData(
      slides,
      perPage + 2 + (withDualSmallItems ? 2 : 0),
      speedS + 0.5,
      isPaused || (pauseOnMouseEnter && t)
    );

  return (
    <div
      className={twMerge(
        "flex h-full w-full gap-4",
        className,
        isVertical ? "flex-col" : "flex-row"
      )}
      {...(pauseOnMouseEnter && {
        onMouseEnter: () => setT(true),
        onMouseLeave: () => setT(false),
      })}
    >
      {slidesSlice.map((slide, idx) => {
        const variant = (() => {
          const maxSize = withSmallItemsMaxSize ? "grow-[40px]" : "";

          if (idx === 0) return "flex-[0]";
          if (idx === slidesSlice.length - 1) return "flex-[0]";

          if (idx === 1)
            return twMerge("flex-[0.33]", maxSize, smallItemClassName);
          if (idx === slidesSlice.length - 2)
            return twMerge("flex-[0.33]", maxSize, smallItemClassName);

          if (withDualSmallItems) {
            if (idx === 2)
              return twMerge("flex-[0.33]", maxSize, smallItemClassName);
            if (idx === slidesSlice.length - 3)
              return twMerge("flex-[0.33]", maxSize, smallItemClassName);
          }

          return twMerge("flex-1", bigItemClassName);
        })();

        return (
          <div
            key={slide.key}
            className={twMerge(
              "relative overflow-hidden rounded-[30px] transition-all duration-500 ease-linear",
              variant,
              slideWrapperClassName
            )}
          >
            {slide.content}
          </div>
        );
      })}
    </div>
  );
};
