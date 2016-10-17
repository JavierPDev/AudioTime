export default function(appModule) {
  appModule.config(function($stateProvider, $locationProvider) {
    'ngInject';

    $stateProvider
      .state({
        name: 'stopwatch',
        url: '/stopwatch',
        component: 'atStopwatch'
      })
      .state({
        name: 'timer',
        url: '/timer',
        component: 'atTimer'
      })
      .state({
        name: 'about',
        url: '/about',
        component: 'atAbout'
      });

    $locationProvider.html5Mode(true);
  });
}
