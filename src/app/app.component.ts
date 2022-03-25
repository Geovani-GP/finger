import { Component, OnInit } from '@angular/core';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private faio: FingerprintAIO) {
  }

  ngOnInit() {
    this.authenticate();
  }


  authenticate(){
    this.faio.isAvailable().then(()=>{
      this.faio.show({}).then((val)=>{
        alert(JSON.stringify(val));
      },(err)=>{
        alert(JSON.stringify(err));
      });
    },()=>{
      alert('Fingerprint is not available');
    });
  }
}
