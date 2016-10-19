import ClockComponent from './clock.component';
import TimekeeperService from './timekeeper.service';
import VoiceService from './voice.service';

export function common(appModule) {
  ClockComponent(appModule);
  appModule.service('timekeeperService', TimekeeperService);
  appModule.service('voiceService', VoiceService);
}

export {TimekeeperService};
