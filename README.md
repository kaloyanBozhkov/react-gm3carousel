# Google Material Design v3 Carousel for React!

## Preview

![Alt Text](https://github.com/kaloyanBozhkov/react-gm3carousel/blob/master/demo-gif.gif?raw=true)

# Usage instructions

## Step 1. install (npm/bun)

```
npm i react-gm3carousel
bun i react-gm3carousel
...
```

## Step 2. import

```
 import { GM3Carousel } from "react-gm3carousel";
 // below is optional, if you're already using TailwindCSS in your project
 import "react-gm3carousel/dist/index.css";
```

## Step 3. Use the carousel properly

Ensure your carousel is wrapped in an element with set width/height otherwise it ain't gonna show.

```
<div  style={{ width:  600, height:  240, background:  "red" }}>
	<GM3Carousel
		perPage={4}
		speedS={2}
		slides={DATA.map((d, idx) => ({
		content:  <p>Slide {idx}</p>,
		key:  d.id,
		}))}
	/>
</div>
```

## Props

```
{
	// vertical vs horizontal carousel
	isVertical?: boolean;

	// wrapper class name
	className?: string;

	// what to render inside each slide
	slides: { content: ReactNode; key: string }[];

	speedS: number;

	// how moany slide to render per page
	perPage: number;

	// will have 4 small previews vs 2
	withDualSmallItems?: boolean;

	// class name for wrapper of small items
	smallItemClassName?: string;

	// class name for wrapper of large items
	bigItemClassName?: string;

	// auto scroll pause
	isPaused?: boolean;

	pauseOnMouseEnter?: boolean;

	slideWrapperClassName?: string;
}
```

## Important

The number of slideItems should be > than the perPage + 2, otherwise the transition animations might not work properly as there will be duplicate render issues due to React and how it might mess up tracking these items since the key will be duplicated.

## Learn more

More about the official spec:

> https://m3.material.io/components/carousel/specs
