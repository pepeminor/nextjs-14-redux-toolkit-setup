"use client";

import { useDispatch } from "react-redux";
import { getTwitterOAuthAsync } from "@/state/auth/authSlice";
import useEffectOnce from "./useEffectOnce";

const useQueryTwitterOAuth = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(getTwitterOAuthAsync("CodeGetFromTwitter") as any);
  });

  return null;
};

export default useQueryTwitterOAuth;
