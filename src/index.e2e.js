describe('Index', () => {
  browser.get('/');

  it('has the correct title', () => {
    expect(browser.getTitle()).toEqual('AudioTime');
  });
});
