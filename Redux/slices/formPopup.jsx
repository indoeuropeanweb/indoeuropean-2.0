import { createSlice } from "@reduxjs/toolkit";

const formPopup = createSlice({
  name: "formPopup",

  initialState: {
    formOpen: false,
  },

  reducers: {
    togglePopup: (state) => {
      state.formOpen = !state.formOpen;
    },
  },
});

export const { togglePopup } = formPopup.actions;
export default formPopup.reducer;
