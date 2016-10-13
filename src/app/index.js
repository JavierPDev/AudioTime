import AppComponent from './app.component';
import routes from './app.routes';

export function app(appModule) {
  AppComponent(appModule);
}

export function router(appModule) {
  routes(appModule)
}
