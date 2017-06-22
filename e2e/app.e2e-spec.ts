import { EceFrontPage } from './app.po';

describe('ECE Front App', () => {
  let page: EceFrontPage;

  beforeEach(() => {
    page = new EceFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
