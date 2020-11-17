import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {deleteuser} from '../models/deleteuser';

@Component({
  selector: 'app-updateroute',
  templateUrl: './updateroute.component.html',
  styleUrls: ['./updateroute.component.css']
})
export class UpdaterouteComponent implements OnInit {
  deleteuser=new deleteuser('');
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  updateUser(user):void{
    this.userService.updateUser(user)
        // .subscribe(result => this.message = "Customer Deleted Successfully!");
        alert("updated successfully");
          this.router.navigate(["homeroute"]);
  }
}
