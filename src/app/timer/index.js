import TimerComponent from './timer.component';
import TimerService from './timer.service';

export default function timer(appModule) {
  TimerComponent(appModule);
  appModule.service('timerService', TimerService);
}


