import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  param = {
    name: 'John Doe',
    age: '25'
  };

  constructor(public navCtrl: NavController) {

  }

}
