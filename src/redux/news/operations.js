import { URL } from "@/constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page = 1, perPage = 6, search = "" }, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/news`, {
        params: { page, limit: perPage, keyword: search },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Fetch error");
    }
  }
);
