/** 
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
  SearchActionTypes,
  ISimpleSearchRequest,
  ISimpleSearchResult
} from "./";
import { Reducer } from "redux";
import {
  IApiState,
  TaskErrorReducer,
  TaskStartReducer,
  TaskSuccessReducer
} from "../../types";
import { SearchLists } from "../Results";

export interface IState
  extends IApiState<ISimpleSearchRequest, ISimpleSearchResult> {}

export const initialState: IState = {
  data: undefined,
  error: undefined,
  loading: false,
  request: undefined
};

export const reducer: Reducer<IState> = (state = initialState, act) => {
  switch (act.type) {
    case SearchActionTypes.SEARCH_SIMPLE_FETCH_REQUEST:
      return TaskStartReducer(state, act);
    case SearchActionTypes.SEARCH_SIMPLE_FETCH_SUCCESS:
      if (act.payload) {
        if (act.payload.users && act.payload.users.length) {
          act.payload.selectedList = SearchLists.People;
        } else if (act.payload.units && act.payload.units.length) {
          act.payload.selectedList = SearchLists.Units;
        } else if (act.payload.departments && act.payload.departments.length) {
          act.payload.selectedList = SearchLists.Departments;
        }
      }
      return TaskSuccessReducer(state, act);
    case SearchActionTypes.SEARCH_SIMPLE_FETCH_ERROR:
      return TaskErrorReducer(state, act);
    case SearchActionTypes.SEARCH_SET_CURRENT_LIST:
      if (state.data) {
        return {
          ...state,
          data: { ...state.data, selectedList: act.payload.list },
          error: undefined,
          loading: false,
          request: undefined
        };
      }
    default:
      return state;
  }
};
