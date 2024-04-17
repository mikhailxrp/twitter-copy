import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const saveUserSettings = createAsyncThunk(
  'users/saveUserSettings',
  async function (user, { rejectWithValue }) {
    try {
      const response = await fetch('/api/server/savesetting', {
        method: 'POST',
        headers: {
          ['Content-type']: 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('data not received...');
      }

      const newUser = await response.json();

      return user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

<<<<<<< HEAD
export const getUserPosts = createAsyncThunk(
  'users/getUserPosts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`/api/server/userpost/${id}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('data not received...');
      }

      const userPosts = await response.json();

      return userPosts;
=======
export const saveChangeEmail = createAsyncThunk(
  'users/saveChangeEmail',
  async function (userEmail, { rejectWithValue }) {
    try {
      const response = await fetch('/api/server/saveemail', {
        method: 'POST',
        headers: {
          ['Content-type']: 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userEmail),
      });

      const message = await response.json();
      return message;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const savePasswordUser = createAsyncThunk(
  'users/savePasswordUser',
  async function (user, { rejectWithValue }) {
    try {
      const response = await fetch('/api/server/changepassword', {
        method: 'POST',
        headers: {
          ['Content-type']: 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok && status === 401) {
        throw new Error('Error bad request...');
      } else if (!response.ok && status === 402) {
        throw new Error('Error bad request...');
      } else if (!response.ok && status === 403) {
        throw new Error('Error bad request...');
      }

      const message = await response.json();
      return message;
>>>>>>> main
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const initialState = {
  id: null,
  user_avatar: '',
  user_email: '',
  user_lastname: '',
  user_name: '',
  user_nikname: '',
  user_password: '',
  user_about: '',
  user_location: '',
  user_site: '',
  date_of_birth: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.user_avatar = action.payload.user_avatar;
      state.user_email = action.payload.user_email;
      state.user_lastname = action.payload.user_lastname;
      state.user_name = action.payload.user_name;
      state.user_nikname = action.payload.user_nikname;
      state.user_password = action.payload.user_password;
      state.user_about = action.payload.user_about;
      state.user_location = action.payload.user_location;
      state.user_site = action.payload.user_site;
      state.date_of_birth = action.payload.date_of_birth;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
