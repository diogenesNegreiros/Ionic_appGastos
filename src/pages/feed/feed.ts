import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
 public nome_usuario:string = "Diogenes do código"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public somaDoisnumeros(nun1:number, nun2:number):void{
    alert(nun1+nun2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisnumeros(7,3);
  }

}
