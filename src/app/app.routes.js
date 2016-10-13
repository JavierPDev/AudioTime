export default function(appModule) {
  appModule.config(function($stateProvider, $locationProvider) {
    'ngInject';

    $stateProvider
      .state({
        name: 'about',
        url: '/about',
        component: 'atAbout'
      })

    $locationProvider.html5Mode(true);
  });
}
