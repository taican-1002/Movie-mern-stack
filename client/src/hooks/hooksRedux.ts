import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

//useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

//useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
