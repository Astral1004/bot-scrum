import { createSlice } from '@reduxjs/toolkit';

interface VisibleFlags {
  sideBarVisibleFlag: boolean;
  headerQuestionnaires: boolean;
  templateVisibleFlag: boolean;
}

const initialState: VisibleFlags = {
  sideBarVisibleFlag: true,
  headerQuestionnaires: false,
  templateVisibleFlag: false
};

export const visibleFlagsSlice = createSlice({
  initialState,
  name: 'visibleFlag',
  reducers: {
    setFlagSideBar: (state, action) => {
      state.sideBarVisibleFlag = action.payload.flag;
    },
    setFlagHeaderQuestionnaires: (state) => {
      state.headerQuestionnaires = !state.headerQuestionnaires;
    }
  }
});
