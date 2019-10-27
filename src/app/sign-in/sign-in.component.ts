import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email: string;
  public password: string;
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient,private router: Router) { }

  onSignIn() {
    if (this.password != null && this.email != null) {
      console.log(this.email);
      console.log(this.password);
      this.url = "http://127.0.0.1:3000/SignIn?text=" + this.email;
      console.log(this.url);
      this.http.get(this.url).subscribe((res: any) => {
        this.result = res.data;
        if (this.result) {
          console.log(this.password);
          console.log(res.data[0].password);
          if (this.password == res.data[0].password) {
            this.router.navigate(['/Home']);
          } else{
            alert("Passwords are not Matching");
          }
        }
        console.log(this.result);
      })
      // }
      //   else{
      //     alert("Incorrect Username or Password Please try again Later......!")
      //   }
    }
  }
  ngOnInit() {
  }
}
