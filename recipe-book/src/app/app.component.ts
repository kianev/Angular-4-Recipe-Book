import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA7JrenudgHmf9aZ8H-yM2CE-YbNfKwGAc",
      authDomain: "angular4-recipe-book-ae13e.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
   this.loadedFeature = feature;
  }
}
