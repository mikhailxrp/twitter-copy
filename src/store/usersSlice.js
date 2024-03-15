import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("/api/server/users");

      if (!response.ok) {
        throw new Error("data not received...");
      }

      const users = await response.json();

      return users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "posts",
  initialState: {
    users: [],
    usersStatus: null,
    usersError: null,
  },
  reduser: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchUsers.pending, (state) => {
      state.usersStatus = "Loading";
      state.usersError = null;
    });

    bulder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersStatus = "Loaded";
      state.users = action.payload;
    });

    bulder.addCase(fetchUsers.rejected, (state, action) => {
      state.usersStatus = "Error load...";
      state.usersError = action.payload;
    });
  },
});

export default usersSlice.reducer;
