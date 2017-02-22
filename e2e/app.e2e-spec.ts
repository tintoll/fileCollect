import { FileCollectPage } from './app.po';

describe('file-collect App', function() {
  let page: FileCollectPage;

  beforeEach(() => {
    page = new FileCollectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
