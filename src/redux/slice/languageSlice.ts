import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ILanguage = "en" | "fr";

export interface LanguageState {
  lang: "en" | "fr";
}

const initialState: LanguageState = {
  lang: "en",
};

export const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<ILanguage>) => {
      state.lang = action.payload;
    },
    resetLanguage: (state) => {
      state.lang = initialState.lang;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage, resetLanguage } = languageSlice.actions;

export default languageSlice.reducer;
