import { apiRequest } from "@/common/api.request";
import { queryApi } from "@/common/queryAPI";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        console.log("isPending");
        state.isLoading = true;
      })
      .addCase(
        getUserAsync.fulfilled,
        (state, action: PayloadAction<ITwitterOAuth>) => {
          console.log("isSuccess");
          return {
            ...state,
            ...action.payload,
            isLoading: false,
          };
        },
      )
      .addCase(getUserAsync.rejected, (state) => {
        console.log("isRejected");
        state = {
          ...initialState,
        };
      });
  },
});

export const authActions = userSlice.actions;
export const authReducers = userSlice.reducer;

// ------- MORE ACTIONS --------
export const getUserAsync = createAsyncThunk(
  "userSlice/GET_USER_ASYNC",
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
