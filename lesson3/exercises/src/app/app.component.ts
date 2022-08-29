import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
    
 }
 handleLand(){
  let result1 = window.confirm('Are you sure the shuttle is ready for land?');
  if(result1) {
    this.color = 'blue';
    this.height = 10000;
    this.width = 0;
    this.message = 'shuttle in flight.';
  }
 }
 handleAbort(){
  let result2 = window.confirm('Are you sure the shuttle is ready to abort?');
  if(result2) {
    this.color = 'blue';
    this.height = 10000;
    this.width = 0;
    this.message = 'shuttle in flight.';
  }

 }
 

 moveRocket(rocketImage, direction) {
  rocketImage.style.bottom = '0px';

  if (direction === 'right') {
     let movement = parseInt(rocketImage.style.left) + 10 + 'px';
     rocketImage.style.left = movement;
     this.width = this.width + 10000;
  }
}
}
