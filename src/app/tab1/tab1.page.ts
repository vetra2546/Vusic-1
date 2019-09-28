import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items;
  constructor(public afd: AngularFireDatabase) {
    this.afd.object('/data/url/audioUrl/-LnXwWwwZ8v0CWN6IpEn/').valueChanges().subscribe(
      data => {
        this.items = data;
        var audioSrc = document.getElementById('AudioSrc');
        alert(data);
        audioSrc.setAttribute("src",this.items);
        console.log('*****'+this.items);
        console.log('***********'+data);

      }
    )
  }
}
window.onload = function(){
  var timeoutID;
  function setup() {
    window.addEventListener("mousemove", resetTimer, false);
    window.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
  }
  setup();

  function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 10000);
  }

  function resetTimer(e) {
    window.clearTimeout(timeoutID);

    goActive();
  }

  function goInactive() {
    var winDiv = document.getElementById('backgroundOverlay');
    winDiv.style.backgroundColor = 'hsla(0, 0%, 0%, 0.749)';
    winDiv.style.zIndex = '9';
    winDiv.style.width = "100%";
    winDiv.style.height = "100%";
    winDiv.style.position = "fixed";
    winDiv.style.top = "0px";
    winDiv.style.left = "0px";
  }

  function goActive() {
    var winDiv = document.getElementById('backgroundOverlay');
    winDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    winDiv.style.zIndex = '-30';
    winDiv.style.width = "100%";
    winDiv.style.height = "100%";
    winDiv.style.position = "fixed";
    winDiv.style.top = "0px";
    winDiv.style.left = "0px";
    console.log('---------->>>>>>>>>######### Active ###########<<<<<<<<<<<<<-----------------')
    startTimer();
  }
}