import { createSlice } from '@reduxjs/toolkit';
import {
  axiosAddTemplate,
  axiosDeleteTemplates,
  axiosGetTemplates
} from '../actions/templatesAction';

interface TemplateProps {
  templates: {
    templatesArray: Array<Record<string, any>>;
    status: string | null;
    error: string | unknown;
  };
  templateInfo: Record<string, any>;
  selectedTemplate: Record<string, any>;
  status: string | null;
  error: string | unknown;
}

const initialState: TemplateProps = {
  templates: {
    status: null,
    error: null,
    templatesArray: []
  },
  templateInfo: {
    questionsArray: []
  },
  selectedTemplate: {
    questionTemplate: []
  },
  status: null,
  error: null
};

export const listTemplates = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    addTemplateInfo: (state, action) => {
      state.templateInfo = state.templates.templatesArray.find(
        (el) => el.id == action.payload.id
      )!;
    },
    addTemplate: (state, action) => {
      state.templates.templatesArray = [
        ...state.templates.templatesArray,
        action.payload.data
      ];
    },
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
      state.templates.status = null;
      state.templates.error = null;
    },
    filterTemplate: (state, action) => {
      state.templates.templatesArray = state.templates.templatesArray.filter(
        (item) => item.creatorId == action.payload.id
      );
    },
    selectTemplate: (state) => {
      const questionsArray: any[] = [];
      state.templateInfo.questionTemplate.forEach((value: Record<any, any>) => {
        questionsArray.push(value.question);
      });
      state.selectedTemplate = state.templateInfo;
      state.selectedTemplate.questionsArray = questionsArray;
    },
    deleteTemplateInfo: (state) => {
      state.templateInfo = {
        questionTemplate: []
      };
    },
    deleteSelectedTemplate: (state) => {
      state.selectedTemplate = {
        questionsArray: []
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosGetTemplates.fulfilled, (state, action) => {
        state.templates.templatesArray = action.payload;
      })
      .addCase(axiosGetTemplates.rejected, () => {})
      .addCase(axiosGetTemplates.pending, () => {});
    builder
      .addCase(axiosDeleteTemplates.fulfilled, (state, action) => {
        state.templates.templatesArray = state.templates.templatesArray.filter(
          (item) => item.id !== action.payload
        );
        state.templateInfo = {
          questionTemplate: []
        };
        state.templates.status = 'resolved';
      })
      .addCase(axiosDeleteTemplates.rejected, (state, action) => {
        state.templates.status = 'rejected';
        state.templates.error = action.payload;
      })
      .addCase(axiosDeleteTemplates.pending, (state) => {
        state.templates.status = 'loading';
      });
    builder
      .addCase(axiosAddTemplate.fulfilled, (state) => {
        state.status = 'resolved';
      })
      .addCase(axiosAddTemplate.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(axiosAddTemplate.pending, (state) => {
        state.status = 'loading';
      });
  }
});
