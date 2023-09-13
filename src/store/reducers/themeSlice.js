import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme") || "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: savedTheme,
  reducers: {
    toggleTheme(state) {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
