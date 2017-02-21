export default function(appModule) {
  appModule.config(function(
        $stateProvider, $locationProvider, $urlRouterProvider, $animateProvider
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
        name: 'settings',
        url: '/settings',
        component: 'atSettings'
      })
      .state({
        name: 'about',
        url: '/about',
        component: 'atAbout'
      });

    $urlRouterProvider.otherwise('/stopwatch');
    $locationProvider.html5Mode(true);

    // Fix so ng-animate doesn't cause button toggles to remain onscreen for a
    // second while their opposite buttons are displayed
    $animateProvider.classNameFilter(/^((?!(no-animate)).)*$/);
  });
}
