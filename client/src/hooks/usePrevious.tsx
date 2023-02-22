import { useRef } from "react";
import { useEffect } from "react";

const usePrevious = (value: undefined) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
