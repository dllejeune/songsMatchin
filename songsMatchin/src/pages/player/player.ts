import { Component } from '@angular/core';
import { HomePage } from './../home/home';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }

  like(){
      console.log("Like !");
  }

  superLike(){
    console.log("Super Like !");
  }

  disLike(){
    console.log("Dislike !");
  }


  return(){
    this.navCtrl.setRoot(HomePage);
  }

}
