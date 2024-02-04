export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const getTwitterOAuth = {
  uri: "/twitter/oauth",
  method: METHOD.GET,
};

export const apiRequest = {
  getTwitterOAuth,
};

export interface IAPI {
  uri: string;
  method: string;
  authenticated?: boolean;
  useFullUri?: boolean;
}
