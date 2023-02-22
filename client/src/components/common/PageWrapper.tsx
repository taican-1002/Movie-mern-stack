import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { setAppState } from "../../redux/features/appStateSlice";

interface PageWrapperProps {
  state: string;
  children?: any;
}

const PageWrapper = ({ state, children }: PageWrapperProps) => {
  const dispath = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispath(setAppState(state));
  }, [state, dispath]);

  return children;
};

export default PageWrapper;
