import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }
  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {}

}
