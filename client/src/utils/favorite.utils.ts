interface FavoriteUtils {
  check: Function;
}

interface checkFavoriteUtils {
  listFavorites: [];
  mediaId: number;
}

const favoriteUtils: FavoriteUtils = {
  check: ({ listFavorites, mediaId }: checkFavoriteUtils) => {
    const mediaIdFavorite =
      listFavorites.length > 0 &&
      listFavorites.find((e) => e["mediaId"] == mediaId);

    return mediaIdFavorite && mediaIdFavorite !== undefined;
  },
};

export default favoriteUtils;
