import {request} from '../utils/request';
import {CONSTANTS} from '../constants';

export const trackSdk = {
  track: (event, payload) => {
    request.post(CONSTANTS.PATH_TRACK_EVENT, {
      event,
      payload
    }).catch(err => {});
  }
}