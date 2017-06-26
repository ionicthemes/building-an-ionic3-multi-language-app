import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen} from "@ionic-native/splash-screen";
import { StatusBar} from "@ionic-native/status-bar";

import { TabsPage } from '../pages/tabs/tabs';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  textDir: string = "ltr";

  constructor(
    platform: Platform,
    public translate: TranslateService,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    translate.setDefaultLang('en');
    translate.use('en');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //this is to determine the text direction depending on the selected language
      this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
      });
    });
  }
}
