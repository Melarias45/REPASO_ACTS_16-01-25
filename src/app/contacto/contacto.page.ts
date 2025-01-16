import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonList, IonButton, IonIcon, IonCheckbox } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonList, IonButton, IonIcon, IonCheckbox, FormControl]
})
export class ContactoPage implements OnInit {

  nombre = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  funcionHola() {
    alert("Todo OK");
  }

}
