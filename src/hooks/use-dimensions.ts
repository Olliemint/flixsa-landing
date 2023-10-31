import { useEffect, useLayoutEffect, useRef } from "react";

interface Dimensions {
  width: number;
  height: number;
}

type UseDimensionsProps = {
  observeResize?: boolean;
};

const defaultDimensions: Dimensions = { width: 0, height: 0 };

export const useDimensions = (
  ref: React.RefObject<HTMLElement>,
  { observeResize = true }: UseDimensionsProps = {}
): Dimensions => {
  const dimensions = useRef<Dimensions>(defaultDimensions);

  const updateDimensions = () => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  };

  // Use useLayoutEffect to measure dimensions on initial render
  useLayoutEffect(() => {
    updateDimensions();
  }, [ref]);

  // If observeResize is true, add a window resize listener
  useEffect(() => {
    if (observeResize) {
      const handleResize = () => {
        updateDimensions();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [observeResize]);

  return dimensions.current;
};
