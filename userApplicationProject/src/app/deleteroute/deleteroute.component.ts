import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {deleteuser} from '../models/deleteuser';
import { UserService } from '../user.service';
@Component({
  selector: 'app-deleteroute',
  templateUrl: './deleteroute.component.html',
  styleUrls: ['./deleteroute.component.css']
})
export class DeleterouteComponent implements OnInit {
  
  constructor(private userService:UserService,private router:Router) { }
  deleteuser=new deleteuser('');
  ngOnInit(): void {
  }
  message: string;
  // deleteUser(user){
  //   this.userService.deleteUsers(user);
  //   alert("deleted successfully");
  //   this.router.navigate(["/"]);
  // }
  deleteUser(user):void{
    this.userService.deleteUsers(user)
        // .subscribe(result => this.message = "Customer Deleted Successfully!");
        alert("deleted successfully");
          this.router.navigate(["homeroute"]);
  }
}
