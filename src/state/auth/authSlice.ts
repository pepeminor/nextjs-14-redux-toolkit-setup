import { apiRequest } from "@/common/api.request";
import { queryApi } from "@/common/queryAPI";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState, store } from "../store";

export interface ITwitterOAuth {
  accessToken?: string;
  refreshToken?: string;
  twitterId?: string;
  picture?: string;
}

interface IOtherState {
  isLoading: boolean;
}

export interface IInitialState extends ITwitterOAuth, IOtherState {}

const initialState: IInitialState = {
  accessToken: undefined,
  refreshToken: undefined,
  twitterId: undefined,
  picture: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTwitterOAuthAsync.pending, (state) => {
        console.log("isPending");
        state.isLoading = true;
      })
      .addCase(
        getTwitterOAuthAsync.fulfilled,
        (state, action: PayloadAction<ITwitterOAuth>) => {
          console.log("isSuccess");
          return {
            ...state,
            ...action.payload,
            isLoading: false,
          };
        },
      )
      .addCase(getTwitterOAuthAsync.rejected, (state) => {
        console.log("isRejected");
        state = {
          ...initialState,
        };
      });
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

// ------- MORE ACTIONS --------
export const getTwitterOAuthAsync = createAsyncThunk(
  "authSlice/GET_TWITTER_OAUTH",
  async (code: string) => {
    try {
      // const accessToken = store.getState().authReducers.accessToken
      const rs: { data: ITwitterOAuth } = await queryApi(
        apiRequest.getTwitterOAuth,
        { code },
      );
      return rs.data;
    } catch (e) {
      throw e;
    }
  },
);
