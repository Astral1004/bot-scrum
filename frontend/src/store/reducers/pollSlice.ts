import { createSlice } from '@reduxjs/toolkit';
import {
  axiosAddPoll,
  axiosArchivePoll,
  axiosDeletePoll,
  axiosGetPolls
} from '../actions/pollAction';

interface PollProps {
  status: string | null;
  error: string | unknown;
  allPolls: Array<QuestionsOnGetProps>;
  listActivePolls: listPolls;
  listArchivePolls: listPolls;
}
const initialState: PollProps = {
  allPolls: [],
  listActivePolls: {
    polls: [],
    status: null,
    error: null
  },
  listArchivePolls: {
    polls: [],
    status: null,
    error: null
  },
  status: null,
  error: null
};

interface listPolls {
  status: string | null;
  error: string | unknown;
  polls: Array<QuestionsOnGetProps>;
}
interface QuestionsOnGetProps {
  id: number;
  creatorId: number;
  name: string;
  activeStatus: boolean;
  createDate: string;
  periodicityDate: string;
  periodicityType: string;
  userForms: {
    id: number;
    user: {
      profileImage: string;
    };
  }[];
  formQuestions: {
    orderNumber: number;
    question: {
      name: string;
      description?: string;
      type?: string;
    };
  }[];
}

export const pollSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
      state.listActivePolls.status = null;
      state.listActivePolls.error = null;
      state.listArchivePolls.status = null;
      state.listArchivePolls.error = null;
    },
    deletePoll: (state, action) => {
      state.listArchivePolls.polls = state.listArchivePolls.polls.filter(
        (item) => item.id !== action.payload.id
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosAddPoll.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(axiosAddPoll.fulfilled, (state) => {
        state.status = 'resolved';
      })
      .addCase(axiosAddPoll.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
    builder
      .addCase(axiosGetPolls.fulfilled, (state, action) => {
        state.allPolls = action.payload;
        state.listActivePolls.polls = state.allPolls.filter((item) => {
          if (item.activeStatus) {
            return item;
          }
        });
        state.listArchivePolls.polls = state.allPolls.filter((item) => {
          if (!item.activeStatus) {
            return item;
          }
        });
      })
      .addCase(axiosGetPolls.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      })
      .addCase(axiosGetPolls.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(axiosArchivePoll.fulfilled, (state, action) => {
        state.listActivePolls.polls = state.listActivePolls.polls.filter(
          (item) => item.id !== action.payload.id
        );
        state.listActivePolls.status = 'resolved';
      })
      .addCase(axiosArchivePoll.rejected, (state, action) => {
        state.listActivePolls.error = action.payload;
        state.listActivePolls.status = 'rejected';
      })
      .addCase(axiosArchivePoll.pending, (state) => {
        state.listActivePolls.status = 'loading';
      });
    builder
      .addCase(axiosDeletePoll.fulfilled, (state) => {
        state.listArchivePolls.status = 'resolved';
      })
      .addCase(axiosDeletePoll.rejected, (state, action) => {
        state.listArchivePolls.error = action.payload;
        state.listArchivePolls.status = 'rejected';
      })
      .addCase(axiosDeletePoll.pending, (state) => {
        state.listArchivePolls.status = 'loading';
      });
  }
});
