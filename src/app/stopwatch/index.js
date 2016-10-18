import StopwatchComponent from './stopwatch.component';
import StopwatchService from './stopwatch.service';

export default function stopwatch(appModule) {
  StopwatchComponent(appModule);
  appModule.service('stopwatchService', StopwatchService);
}
