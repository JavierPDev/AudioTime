describe('AboutComponent', () => {
  let element;
  let scope;

  beforeEach(module('app'));
  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = angular.element(`<at-about></at-about>`);
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should exist', () => {
    expect(element).toBeDefined();
  });

  it('should render proper text', () => {
    let h3 = element.find('h3');
    expect(h3.text()).toBe('About');
  });
});
