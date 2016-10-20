export default function(appModule) {
  appModule.config(function(
        $stateProvider, $locationProvider, $urlRouterProvider
      ) {
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

    $urlRouterProvider.otherwise('/stopwatch');
    $locationProvider.html5Mode(true);
  });
}
