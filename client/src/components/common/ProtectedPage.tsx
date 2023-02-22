import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";

const ProtectedPage = ({ children }: any) => {
  const dispath = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispath(setAuthModalOpen(!user));
  }, [user, dispath]);

  return user ? children : null;
};

export default ProtectedPage;
