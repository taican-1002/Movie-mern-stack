import publicClient from "../client/public.client";

interface PersonEnpoints {
  detail: (val: any) => string;
  medias: (val: any) => string;
}

interface PersonId {
  personId: number;
}

const personEnpoints: PersonEnpoints = {
  detail: ({ personId }) => `person/${personId}`,
  medias: ({ personId }) => `person/${personId}/medias`,
};

const personApi = {
  //detail
  detail: async ({ personId }: PersonId) => {
    try {
      const response = await publicClient.get(
        personEnpoints.detail({ personId })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //medias
  medias: async ({ personId }: PersonId) => {
    try {
      const response = await publicClient.get(
        personEnpoints.medias({ personId })
      );
      return { response };
    } catch (error: any) {
      return { error };
    }
  },
};

export default personApi;
