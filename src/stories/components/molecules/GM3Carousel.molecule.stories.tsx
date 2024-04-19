import type { Story } from "@ladle/react";
import { GM3Carousel } from "components/molecules/GM3Carousel.molecule";
import { twMerge } from "tailwind-merge";

export const GM3CarouselStory: Story<{
  perPage: number;
  speedS: number;
  withDualSmallItems: boolean;
  isPaused: boolean;
  pauseOnMouseEnter: boolean;
  smallItemClassName: string;
  bigItemClassName: string;
  isVertical: boolean;
  withSmallItemsMaxSize: boolean;
  gap?: number | null;
}> = ({
  perPage,
  speedS,
  withDualSmallItems,
  isPaused,
  pauseOnMouseEnter,
  smallItemClassName,
  bigItemClassName,
  isVertical,
  gap,
}) => {
  const containerStyle = {
    height: isVertical ? 600 : 240,
    width: isVertical ? 240 : 600,
  };

  return (
    <div
      className={twMerge("gm3c-bg-slate-100 gm3c-overflow-hidden")}
      style={containerStyle}
    >
      <GM3Carousel
        isVertical={isVertical}
        perPage={perPage}
        withDualSmallItems={withDualSmallItems}
        speedS={speedS}
        isPaused={isPaused}
        bigItemClassName={bigItemClassName}
        smallItemClassName={smallItemClassName}
        pauseOnMouseEnter={pauseOnMouseEnter}
        gap={gap}
        slides={DATA.map(({ id }, n) => {
          return {
            content: (
              <div className="gm3c-h-full gm3c-flex gm3c-items-center gm3c-justify-center gm3c-bg-slate-400">
                <p>Slide #{n + 1}</p>
              </div>
            ),
            key: id,
          };
        })}
      />
    </div>
  );
};

GM3CarouselStory.args = {
  perPage: 4,
  speedS: 2,
  withDualSmallItems: false,
  isPaused: false,
  pauseOnMouseEnter: true,
  smallItemClassName: "",
  bigItemClassName: "",
  isVertical: false,
  gap: 16,
};

GM3CarouselStory.argTypes = {
  isVertical: { control: { type: "boolean" } },
  perPage: { control: { type: "number" } },
  speedS: { control: { type: "number" } },
  withDualSmallItems: { control: { type: "boolean" } },
  isPaused: { control: { type: "boolean" } },
  pauseOnMouseEnter: { control: { type: "boolean" } },
  smallItemClassName: { control: { type: "text" } },
  bigItemClassName: { control: { type: "text" } },
  gap: { control: { type: "number" } },
};

const DATA = [
  {
    id: "someid1",
  },
  {
    id: "someid2",
  },
  {
    id: "someid3",
  },
  {
    id: "someid4",
  },
  {
    id: "someid5",
  },
  {
    id: "someid6",
  },
  {
    id: "someid7",
  },
  {
    id: "someid8",
  },
  {
    id: "someid9",
  },
  {
    id: "someid10",
  },
];
