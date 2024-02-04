import { store } from "@/state/store";
import axios from "axios";
import { IAPI } from "./api.request";
import { DOMAIN_URI } from "./helper";

export const queryApi = async (schema: IAPI, params: any) => {
  const { uri, method, authenticated, useFullUri } = schema;
  let headers = {};

  if (authenticated) {
    const accessToken = store.getState().authReducers.accessToken;
    console.log("------accessToken------", accessToken);
    if (accessToken) {
      headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    } else {
      console.error("AccessToken not available.");
      //   throw new Error("AccessToken not available.");
    }
  }

  const fullUri = useFullUri
    ? uri
    : `${DOMAIN_URI}${uri.replace(/{(\w+)}/g, (match, param) => params[param])}`;

  try {
    const response = await axios({
      method,
      url: fullUri,
      headers,
      params,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
