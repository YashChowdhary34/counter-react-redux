import { createSlice } from "@reduxjs/toolkit";
const privacyToggleSlice = createSlice({
  name: "privacyToggle",
  initialState: { privacy: false },
  reducers: {
    toggle: (state) => {
      state.privacy = !state.privacy;
    },
  },
});

export const privacyToggleAction = privacyToggleSlice.actions;

export default privacyToggleSlice;
