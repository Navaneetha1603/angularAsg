import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  registerUser(user){
    this.http.post('http://localhost:3000/user',user).subscribe(res=>{
      console.log(res);
    })
  }
  // viewUsers(){
  //   this.http.get('http://localhost:3000/user').subscribe(res=>{
  //     console.log(res);
  //   })
  // }
  getUsers() { return this.http.get('http://localhost:3000/user') }
  //delete users
  deleteUsers(user){
    console.log(user.id);
    let id=user.id;
    console.log("userid:"+id);
    this.http.delete(`http://localhost:3000/users/${id}`,user).subscribe(res=>{
      console.log("response"+res);
    })
  }
  updateUser(user){
    console.log(user.id);
    let id=user.id;
    console.log("userid:"+id);
    this.http.patch(`http://localhost:3000/users/${id}`,user).subscribe(res=>{
      console.log("response"+res);
    })
  }
}
