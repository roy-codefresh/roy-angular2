import { RoyAngular2Page } from './app.po';

describe('roy-angular2 App', function() {
  let page: RoyAngular2Page;

  beforeEach(() => {
    page = new RoyAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
