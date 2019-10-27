import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userName : string;
  public password : string;
  public confirmPassword : string;
  public email: string;
  url: string;
  message:Observable<any>
  constructor(private http: HttpClient, private router: Router) { }

  onRegister(){
    if(this.password == this.confirmPassword){
      if(this.userName != null && this.password != null && this.confirmPassword != null && this.email!=null)
      {
        this.url = "http://127.0.0.1:3000/signup/register"
        this.http.post(this.url,{
          userName: this.userName ,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
          .subscribe(
            (res:any)=>{
              this.message = res.message;
              alert(this.message);
              this.router.navigate(['/Home']);
              console.log(this.message);
            }
          )
      }
      else{
        alert("Please fill the form correctly");
      }
    }
    else{
      alert("Passwords are not matching");
    }
  }
  ngOnInit(){
  }

}
