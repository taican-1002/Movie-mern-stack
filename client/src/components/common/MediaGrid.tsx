import { Grid } from "@mui/material";
import { MediaGridProps } from "../../types/mediaGrid.types";
import MediaItem from "./MediaItem";

const MediaGrid = ({ medias, mediaType }: MediaGridProps) => {
  return (
    <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
      {medias.map((media: string, index: number) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <MediaItem media={media} mediaType={mediaType} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaGrid;
