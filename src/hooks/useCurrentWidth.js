import { useState, useEffect } from "react";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const debounce = (fn, delay = 300) => {
  let timerId;

  return function(...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
export function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };

    window.addEventListener(
      "resize",
      debounce(() => resizeListener())
    );
    return () => {
      window.removeEventListener(
        "resize",
        debounce(() => resizeListener())
      );
    };
  }, []);

  return width;
}
