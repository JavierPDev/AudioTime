import TimekeeperService from './timekeeper.service';

export function timekeeperService(appModule) {
  appModule.service('timekeeperService', TimekeeperService);
}

export {TimekeeperService};
