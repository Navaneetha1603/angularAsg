import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { BrowserModule } from '@angular/platform-browser'
import { UserService } from '../user.service';

@Component({
  selector: 'app-homeroute',
  templateUrl: './homeroute.component.html',
  styleUrls: ['./homeroute.component.css']
})
export class HomerouteComponent implements OnInit {
  constructor(private http:HttpClient,private userService:UserService) { }
  public users:any;
 
  ngOnInit(){
    let resp=this.http.get("http://localhost:3000/user");
    resp.subscribe((data)=>this.users=data);
    resp.subscribe((data)=>console.log(data));
    // this.userService.getUsers().subscribe(
    //   data => this.users = data
    //   )
  }
}
