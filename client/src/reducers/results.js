import {
  RESULTS_INFO_REQUEST,
  RESULTS_INFO_SUCCESS,
  RESULTS_INFO_FAILURE,
  RESULTS_ACTION_REQUEST,
  RESULTS_ACTION_SUCCESS,
  RESULTS_ACTION_FAILURE,
} from '../actions';

const results = (state = {
  isFetching: false,
  errorMessage: '',
  results: [],
  currentResult: null,
}, action) => {
  switch (action.type) {
    case RESULTS_INFO_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case RESULTS_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.results,
        errorMessage: '',
      };
    case RESULTS_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message,
      };
    case RESULTS_ACTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case RESULTS_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: state.results.slice(1),
        errorMessage: '',
      };
    case RESULTS_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default results;
