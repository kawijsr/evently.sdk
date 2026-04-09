import {trackSdk} from './track/track.sdk';

export const evently = {
  track: trackSdk.track
};

export class Evently {
  private static instance: Evently;
  track: Function;
  apiKey: string;

  constructor({apiKey}: { apiKey: string}) {
    this.track = trackSdk.track;
    this.apiKey = apiKey;
    Evently.instance = this;
  }

  static getInstance = () => {
    return Evently.instance;
  }

  static init = ({apiKey}: { apiKey: string}) => {
    const newInstance = new Evently({apiKey});
    Evently.instance = newInstance;
    return newInstance;
  }
}