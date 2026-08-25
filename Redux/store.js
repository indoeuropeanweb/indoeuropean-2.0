import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./slices/popupReducer";
import formPopup from "./slices/formPopup";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    form: formPopup
  },
});