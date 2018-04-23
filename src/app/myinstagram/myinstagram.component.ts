import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-myinstagram',
  templateUrl: './myinstagram.component.html',
  styleUrls: ['./myinstagram.component.css']
})
export class MyinstagramComponent implements OnInit {

  email: string;
  fullname: string;
  username: string;
  password: string;
  constructor() {
  }
  log() {
    console.log(this.email);
    console.log(this.fullname);
    console.log(this.username);
    console.log(this.password);
  }
  changeImg() {
    const images = [
      '../../assets/images/2debbd5aaab8.jpg',
      '../../assets/images/48fc753e7712.jpg',
      '../../assets/images/783de51ff073.jpg',
      '../../assets/images/8e431a88ffdd.jpg',
      '../../assets/images/9cb9ba2dda6a.jpg'
    ];
    for (const iterator of images) {
      $("#image1").attr("src", iterator);
      setTimeout(() => { }, 3000);
    }

  }
  ngOnInit() {
  }

}
