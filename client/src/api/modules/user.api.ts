import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

interface UserSignin {
  username: string;
  password: string;
}

interface UserSignup {
  username: string;
  password: string;
  confirmPassword: string;
  displayName: string;
}

interface UserPasswordUpdate {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface UserEnpointsInterface {
  signIn: string;
  signUp: string;
  getInfo: string;
  passwordUpdate: string;
}

const userEndpoints: UserEnpointsInterface = {
  signIn: "user/signin",
  signUp: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
};

const userApi = {
  //signin
  signin: async ({ username, password }: UserSignin) => {
    try {
      const response = await publicClient.post(userEndpoints.signIn, {
        username,
        password,
      });
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //signup
  signup: async ({
    username,
    password,
    confirmPassword,
    displayName,
  }: UserSignup) => {
    try {
      const response = await publicClient.post(userEndpoints.signUp, {
        username,
        password,
        confirmPassword,
        displayName,
      });
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //getInfo
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);
      return { response };
    } catch (error: any) {
      return { error };
    }
  },

  //passwordUpdate
  passwordUpdate: async ({
    password,
    newPassword,
    confirmNewPassword,
  }: UserPasswordUpdate) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmNewPassword,
      });
      return { response };
    } catch (error: any) {
      return { error };
    }
  },
};

export default userApi;
