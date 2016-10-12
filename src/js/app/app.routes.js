export default function(appModule) {
  appModule.config(function($stateProvider, $locationProvider) {
    $stateProvider
      .state({
        name: 'about',
        url: '/about',
        component: 'about'
      })

    $locationProvider.html5Mode(true);
  });
}
