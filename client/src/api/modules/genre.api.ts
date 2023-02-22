import publicClient from "../client/public.client";

interface MediaType {
  mediaType?: string;
}

interface GenreEnpoints {
  list: (val: any) => any;
}

const genreEnpoints: GenreEnpoints = {
  list: ({ mediaType }: MediaType) => `${mediaType}/genres`,
};

const genreApi = {
  getList: async ({ mediaType }: MediaType) => {
    try {
      const response = await publicClient.get(
        genreEnpoints.list({ mediaType })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },
};

export default genreApi;
