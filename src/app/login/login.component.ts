import { Component } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../Shared Classes and types/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  errors:string='';
constructor(public _AuthServices:AuthService,public _route:Router){}

Loginform:FormGroup=new FormGroup({
  // username:new FormControl(null),
  email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
  password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9]{2,8}$'),Validators.required]),
  // confirmpassword:new FormControl(null,[c])
});

// usermodel=new User("eman","1234em","emahamza@gmail.com","Twitter");
usermodel=new User("","","","");
soicalList=["Facebook","Twitter","Google"];
 
submitLogin(Loginform:FormGroup){
  if(Loginform.valid){
    this._AuthServices.Login(this.usermodel).subscribe({
      // if(response.message=='success'){
      //   this._route.navigate(['Main'])
      // }
      // else{
      //   //error in Api  {errors}
      //   this.errors=response.errors.email.message;
      // }
      next:data=>console.log(data),
      error:error=>console.log(error)
    })
  }
}
}
