import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
    loadDataFriendsAlbum(event){
      setTimeout(() => {
        console.log('Data');
        this.appendItemsMusic(5);
        event.target.complete();
      }, 500);
    }
    appendItemsMusic(number) {
      const list = document.getElementById('SelectionBar');
      console.log('length is', length);
      const originalLength = length;
      for (var i = 0; i < number; i++) {
      const el = document.createElement('ion-slide');
      el.innerHTML = `<ion-chip style="display: inline-block;
      background-image: linear-gradient(90deg,violet,dodgerblue);
      width:100px;
      height:100px;
      border-radius: 20%;
      margin-left:20px;">
      <div style="position: relative;
      background-image: url("https://www.gravatar.com/avatar/${i + originalLength}?d=monsterid&f=y");
      background-size: cover;
      background-repeat:no-repeat;
      width:30px;
      height:30px;
      top:70px;
      right:10px;
      border-radius: 50%;"></div>
      </ion-chip>`;
      list.appendChild(el);
      length++;
      }
      }
    }
function StartFunction(){
  const chipSlide = document.getElementById('SlideMaster');
  for (let imageNum = 0; imageNum < 16; imageNum++) {
    const slide = document.createElement('div');
    const node = slide.innerHTML = `<ion-chip class="NewListeners">
      <div style="background-image: url('src\\Images\\png\\${imageNum}.png');
      background-size:cover;
      background-repeat: no-repeat;
      width:100px;
      height:100px;
      margin-right: 1px;
      border-radius: 100%;"></div><br>
      <ion-label class="NewFriendText">Dekana</ion-label>
      </ion-chip>`;
    chipSlide.appendChild(slide);
  }
}
// Accordion
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else {
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}