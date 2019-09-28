import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var firebaseConfig = {
  apiKey: "AIzaSyCgOUjqD2bmXjZ7ARmfz4hDPekP02kariU",
  authDomain: "vusic-249602.firebaseapp.com",
  databaseURL: "https://vusic-249602.firebaseio.com",
  projectId: "vusic-249602",
  storageBucket: "vusic-249602.appspot.com",
  messagingSenderId: "1043108786191",
  appId: "1:1043108786191:web:6d78e1924f87d717"
};


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
   AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)],

  declarations: [Tab1Page]
})
export class Tab1PageModule {}
