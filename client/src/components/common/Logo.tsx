import { Typography, useTheme } from "@mui/material";
import { useAppSelector } from "../../hooks/hooksRedux";

const Logo = () => {
  const theme = useTheme();

  const { themeMode } = useAppSelector((state) => state.themeMode);

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      {themeMode === "dark" ? "Moon" : "Sun"}
      <span style={{ color: theme.palette.primary.main }}>Flix</span>
    </Typography>
  );
};

export default Logo;
