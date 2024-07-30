import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDefaultState, IHTTPCodes, IPosts } from "../reduxInterface";
import axios, { myAxios, HTTPCodes } from "../axios";

export interface PostsState extends IDefaultState {
  data?: IPosts[] | undefined;
}

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await myAxios.get<IPosts[]>(`/posts`);
      if (response && response.data && response.data.length > 0) {
        return response.data;
      } else {
        return rejectWithValue(HTTPCodes[204]);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          return rejectWithValue(HTTPCodes[status] || HTTPCodes[500]);
        } else if (error.request) {
          return rejectWithValue(HTTPCodes[503]);
        }
      }
      return rejectWithValue(HTTPCodes[500]);
    }
  }
);

const initialState: PostsState = {
  loading: false,
  data: undefined,
  hasData: false,
  hasError: false,
  error: undefined,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllPosts.fulfilled,
        (state, action: PayloadAction<IPosts[]>) => {
          state.loading = false;
          state.hasData = true;
          state.data = action.payload;
          state.error = undefined;
        }
      )
      .addCase(getAllPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.hasError = true;
        state.error = action.payload as IHTTPCodes;
      });
  },
  reducers: {},
});

// export const {  } = postsSlice.actions;

export default postsSlice.reducer;
