describe('formatTime filter', () => {
  let $filter;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject((_$filter_) => {
    $filter = _$filter_;
  }));

  it('exists', () => {
    expect($filter).toBeDefined();
  });

  it('should format time properly', () => {
    expect($filter('formatTime')(30)).toBe('0:30');
    expect($filter('formatTime')(60)).toBe('1:00');
    expect($filter('formatTime')(65)).toBe('1:05');
    expect($filter('formatTime')(90)).toBe('1:30');
    expect($filter('formatTime')(180)).toBe('3:00');
    expect($filter('formatTime')(2600)).toBe('43:20');
  });
});


