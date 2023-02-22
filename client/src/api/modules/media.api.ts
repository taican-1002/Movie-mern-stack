import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

interface MediaEnpoints {
  list: (val: any) => string;
  detail: (val: any) => string;
  search: (val: any) => string;
}

interface MediaGetList {
  mediaType: string;
  mediaCategory: string;
  page: number;
}

interface MediaDetail {
  mediaType?: string;
  mediaId?: string;
}

interface MediaSearch {
  mediaType: string;
  query: string;
  page: number;
}

const mediaEnpoints: MediaEnpoints = {
  list: ({ mediaType, mediaCategory, page }) =>
    `${mediaType}/${mediaCategory}?page=${page}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
  search: ({ mediaType, query, page }) =>
    `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
  //getlist
  getList: async ({ mediaType, mediaCategory, page }: MediaGetList) => {
    try {
      const response = await publicClient.get(
        mediaEnpoints.list({ mediaType, mediaCategory, page })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //detail
  getDetail: async ({ mediaType, mediaId }: MediaDetail) => {
    try {
      const response = await privateClient.get(
        mediaEnpoints.detail({ mediaType, mediaId })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //search
  search: async ({ mediaType, query, page }: MediaSearch) => {
    try {
      const response = await publicClient.get(
        mediaEnpoints.search({ mediaType, query, page })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },
};

export default mediaApi;
