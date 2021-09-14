import { createAction } from '@reduxjs/toolkit';
const jwt = require('jsonwebtoken');

export const setFlagSideBar = createAction(
  'visibleFlag/setFlagSideBar',
  function () {
    const token = localStorage.getItem('token');
    const info = jwt.decode(token);
    if (info) {
      return {
        payload: {
          flag: info.authenticated
        }
      };
    } else {
      return {
        payload: {
          flag: false
        }
      };
    }
  }
);

export const setFlagHeaderQuestionnaires = createAction(
  'visibleFlag/setFlagHeaderQuestionnaires'
);

export const templateVisibleFlag = createAction(
  'visibleFlags/templateVisibleFlag',
  (flag: boolean) => {
    return {
      payload: flag
    };
  }
);
