import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  user_avatar: null,
  user_email: null,
  user_lastname: null,
  user_name: null,
  user_nikname: null,
  user_password: null,
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
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
