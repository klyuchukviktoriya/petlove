import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "@/constants/api";

axios.defaults.baseURL = URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL}/users/signin`, userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL}/users/signup`, userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Registration failed"
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) return thunkAPI.rejectWithValue("No token available");
    await axios.post(`${URL}/users/signout`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });

    localStorage.removeItem("token");
    axios.defaults.headers.common.Authorization = "";
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Logout error");
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token || localStorage.getItem("token");

    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      const { data } = await axios.get(`${URL}/users/current`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
