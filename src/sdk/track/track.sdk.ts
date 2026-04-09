import {request} from '../utils/request';
import {CONSTANTS} from '../constants';

export const trackSdk = {
  track: (type: string, event: string, payload) => {
    request.post(CONSTANTS.PATH_TRACK_EVENT, {
      type,
      event,
      payload: typeof payload === 'object' ? JSON.stringify(payload) : payload,
    }).catch(err => {});
  }
}