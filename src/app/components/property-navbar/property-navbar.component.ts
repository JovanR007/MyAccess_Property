import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-property-navbar',
  templateUrl: './property-navbar.component.html',
  styleUrls: ['./property-navbar.component.css']
})
export class PropertyNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  btnClick(){
   this.router.navigate(['my-properties']);
  }
  btnClick1(){
    this.router.navigate(['property-map']);
   }
}
