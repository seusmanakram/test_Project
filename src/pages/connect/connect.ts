import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';




/**
 * Generated class for the ConnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public bluetoothSerial: BluetoothSerial) {
      bluetoothSerial.enable();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
  }

  
  getData(){

    this.bluetoothSerial.discoverUnpaired().then(
      (success) => {
        
        
      },
      (err) => {
        console.log(err);
      }
    )


  }
  

 






}
