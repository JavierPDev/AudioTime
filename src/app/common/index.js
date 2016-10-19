import TimekeeperService from './timekeeper.service';
import ClockComponent from './clock.component';

export function common(appModule) {
  ClockComponent(appModule);
  appModule.service('timekeeperService', TimekeeperService);
}

export {TimekeeperService};
