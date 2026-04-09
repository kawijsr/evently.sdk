import {trackSdk} from './track/track.sdk';

export const evently = {
  track: trackSdk.track
};

export class Evently {
  private static instance: Evently;
  static track = trackSdk.track;
  apiKey: string;

  constructor({apiKey}: { apiKey: string}) {
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