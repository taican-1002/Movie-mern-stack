import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import personApi from "../../api/modules/person.api";
import MediaItem from "./MediaItem";
import { toast } from "react-toastify";

const PersonMediaGrid = ({ personId }: any) => {
  const [medias, setMedias] = useState([] as Array<any>);
  const [filteredMedias, setFilteredMedias] = useState([] as Array<any>);
  const [page, setPage] = useState(1);
  const skip = 8;

  useEffect(() => {
    const getMedias = async () => {
      const { response, error } = await personApi.medias({ personId });

      if (error) toast.error(error.message);
      if (response) {
        const mediasSorted = response.data.cast.sort(
          (a: number, b: number) => getReleaseDate(b) - getReleaseDate(a)
        );
        setMedias([...mediasSorted]);
        setFilteredMedias([...mediasSorted].splice(0, skip));
      }
    };

    getMedias();
  }, [personId]);

  const getReleaseDate = (media: any) => {
    const date =
      media.media_type === tmdbConfigs.mediaType.movie
        ? new Date(media.release_date)
        : new Date(media.first_air_date);
    return date.getTime();
  };

  const onLoadMore = () => {
    setFilteredMedias([
      ...filteredMedias,
      ...[...medias].splice(page * skip, skip),
    ]);
    setPage(page + 1);
  };

  return (
    <>
      <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
        {filteredMedias.map((media, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <MediaItem media={media} mediaType={media.media_type} />
          </Grid>
        ))}
      </Grid>
      {filteredMedias.length < medias.length && (
        <Button onClick={onLoadMore}>load more</Button>
      )}
    </>
  );
};

export default PersonMediaGrid;
