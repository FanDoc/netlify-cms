import Immutable from 'immutable';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from '../actions/auth';

const auth = (state = null, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      const popup = (state && state.get('popup')) || false;
      const user = state && state.get('user');
      return Immutable.Map({ isFetching: true, popup, user });
    case AUTH_SUCCESS:
      return Immutable.fromJS({ user: action.payload, popup: false });
    case AUTH_FAILURE:
      return Immutable.Map({ error: action.payload.toString(), popup: false });
    case LOGOUT:
      return state.remove('user');
    case "SHOW_AUTH_POPUP":
      return state.set('popup', true);
    default:
      return state;
  }
};

export default auth;
