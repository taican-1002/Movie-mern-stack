import privateClient from "../client/private.client";

interface ReviewEnpoints {
  list: string;
  add: string;
  remove: (val: any) => string;
}

interface ReviewAdd {
  mediaId: number;
  mediaType: string;
  mediaTitle: string;
  mediaPoster: string;
  content: string;
}

interface ReviewId {
  reviewId: number;
}

const reviewEnpoints: ReviewEnpoints = {
  list: "reviews",
  add: "reviews",
  remove: ({ reviewId }) => `reviews/${reviewId}`,
};

const reviewApi = {
  //get list
  getList: async () => {
    try {
      const response = await privateClient.get(reviewEnpoints.list);
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
    content,
  }: ReviewAdd) => {
    try {
      const response = await privateClient.post(reviewEnpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      });
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //remove
  remove: async ({ reviewId }: ReviewId) => {
    try {
      const response = await privateClient.delete(
        reviewEnpoints.remove({ reviewId })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },
};

export default reviewApi;
