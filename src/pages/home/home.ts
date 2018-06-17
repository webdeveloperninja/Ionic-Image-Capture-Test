import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera) {}

  takePhoto() {
    const options: CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.base64Image);
      },
      err => {
        console.log(err);
      }
    );
  }

  removePhoto() {
    this.base64Image = null;
  }
}
