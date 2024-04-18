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
}> = ({
  perPage,
  speedS,
  withDualSmallItems,
  isPaused,
  pauseOnMouseEnter,
  smallItemClassName,
  bigItemClassName,
  isVertical,
}) => (
  <div
    className={twMerge(
      "bg-slate-100 overflow-hidden",
      isVertical ? "h-[600px] w-[240px]" : " w-[600px] h-[240px]"
    )}
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
      slides={DATA.map(({ id }, n) => {
        return {
          content: (
            <div className="h-full flex items-center justify-center bg-slate-400">
              <p>Slide #{n + 1}</p>
            </div>
          ),
          key: id,
        };
      })}
    />
  </div>
);

GM3CarouselStory.args = {
  perPage: 4,
  speedS: 2,
  withDualSmallItems: false,
  isPaused: false,
  pauseOnMouseEnter: true,
  smallItemClassName: "",
  bigItemClassName: "",
  isVertical: false,
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
