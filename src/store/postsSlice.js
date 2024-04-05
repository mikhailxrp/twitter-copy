import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('/api/server/posts');

      if (!response.ok) {
        throw new Error('data not received...');
      }

      const posts = await response.json();

      return posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchAddPosts = createAsyncThunk(
  'posts/fetchAddPosts',
  async function (message, { rejectWithValue }) {
    try {
      const response = await fetch('/api/server/newpost', {
        method: 'POST',
        headers: {
          ['Content-type']: 'application/json;charset=utf-8',
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    adPostStatus: null,
    error: null,
  },
  reduser: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchPosts.pending, (state) => {
      state.status = 'Loading';
      state.error = null;
    });

    bulder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'Loaded';
      state.posts = action.payload;
    });

    bulder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'Error load...';
      state.error = action.payload;
    });

    bulder.addCase(fetchAddPosts.fulfilled, (state, action) => {
      state.adPostStatus = action.payload;
      state.error = action.payload;
    });
  },
});

export default postsSlice.reducer;
export const { handleOverlay } = postsSlice.actions;
