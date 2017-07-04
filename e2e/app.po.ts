import { browser, by, element } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export class ProjectPage {
  navigateTo(): wdpromise.Promise<any> {
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('fu-app-root h2')).getText();
  }
}
