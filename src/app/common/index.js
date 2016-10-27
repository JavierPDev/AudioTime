import ClockComponent from './clock.component';
import formatTimeFilter from './format-time.filter';
import TimekeeperController from './timekeeper.controller';
import TimekeeperService from './timekeeper.service';
import SpeechService from './speech.service';

export function common(appModule) {
  ClockComponent(appModule);
  appModule.filter('formatTime', formatTimeFilter);
  appModule.service('timekeeperService', TimekeeperService);
  appModule.service('speechService', SpeechService);
}

export { TimekeeperController };
export { TimekeeperService };
