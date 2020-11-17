import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../models/user';
// import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {
  // public min=20;
  // public max=60;
  usermodel=new user('','',null,'');
  constructor(private userService:UserService ,private router:Router) { }
  ngOnInit(): void {
  }
  registerUser(user ){
    // console.log(user);
    //call the service
    // user.resetForm({});
    console.log("this is add route");
    this.userService.registerUser(user);
    alert("successfully inserted");
    this.router.navigate(["homeroute"]);
    // this.router.navigate(["/"]);
    
  }
}
