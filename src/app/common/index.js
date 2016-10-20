import ClockComponent from './clock.component';
import formatTimeFilter from './format-time.filter';
import TimekeeperController from './timekeeper.controller';
import TimekeeperService from './timekeeper.service';
import VoiceService from './voice.service';

export function common(appModule) {
  ClockComponent(appModule);
  appModule.filter('formatTime', formatTimeFilter);
  appModule.service('timekeeperService', TimekeeperService);
  appModule.service('voiceService', VoiceService);
}

export { TimekeeperController };
export { TimekeeperService };
