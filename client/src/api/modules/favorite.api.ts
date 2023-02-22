import privateClient from "../client/private.client";

interface FavoriteId {
  favoriteId: number;
}

interface FavoriteEnpointsInterface {
  list: string;
  add: string;
  remove: (val: any) => string;
}

interface AddFavorite {
  mediaId: number;
  mediaType: string;
  mediaTitle: string;
  mediaPoster: string;
  mediaRate: number;
}

const favoriteEnpoints: FavoriteEnpointsInterface = {
  list: "user/favorites",
  add: "user/favorites",
  remove: ({ favoriteId }: FavoriteId) => `user/favorites/${favoriteId}`,
};

const favoriteApi = {
  //get list
  getList: async () => {
    try {
      const response = await privateClient.get(favoriteEnpoints.list);
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //add
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate,
  }: AddFavorite) => {
    try {
      const response = await privateClient.post(favoriteEnpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate,
      });
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //remove
  remove: async ({ favoriteId }: FavoriteId) => {
    try {
      const response = await privateClient.delete(
        favoriteEnpoints.remove({ favoriteId })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },
};

export default favoriteApi;
