import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    totalPages: 1,
    page: 1,
    perPage: 6,
    search: "",
    loading: false,
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearch, setPage } = newsSlice.actions;
export default newsSlice.reducer;
