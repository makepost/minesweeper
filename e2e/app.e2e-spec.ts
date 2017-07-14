import { UniquerealPage } from './app.po';

describe('uniquereal App', () => {
  let page: UniquerealPage;

  beforeEach(() => {
    page = new UniquerealPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
