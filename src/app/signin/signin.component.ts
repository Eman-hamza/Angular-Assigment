import { Component, OnInit } from '@angular/core';
import { User } from '../Shared Classes and types/model/User';
import { FormBuilder, FormControl,FormGroup ,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { forbiddinNameVal } from '../Validations/usernameVal';
import { confirmpassword } from '../Validations/confirmPassword';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
errors:string='';
constructor(public _AuthServices:AuthService,public _route:Router){}

registerform:FormGroup=new FormGroup({
  username:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]*$'),Validators.required,forbiddinNameVal(/Admin/ || /admin/ || /adminstrator/ || /Adminstrator/)]),
  email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
  password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9]{2,8}$'),Validators.required]),
  confirmpassword:new FormControl(null,Validators.required)
},{validators:[confirmpassword]});

ngOnInit(): void {
  // this.createRegistration();
}

// createRegistration(){
//   this.registerform=this.fb.group({
//     username:[null,Validators.pattern('^[A-Z][a-z0-9]*$'),Validators.required],
//     email:[null,Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')],
//     password:[null,Validators.pattern('^[a-zA-Z0-9]{2,8}$'),Validators.required],
//     confirmpassword:[null,Validators.required,Validators.pattern('^[a-zA-Z0-9]{2,8}$')]
//   });
// }

usermodel=new User('','','','');
soicalList=["Facebook","Twitter","Google"];

// user:any={};

submitRegister(){
  // if(registerform.valid){
    this._AuthServices.Register(this.usermodel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
   localStorage.setItem(this.usermodel.username,JSON.stringify(this.usermodel));
   alert("Data Saved Successuflly");
  }
    // this.user=Object.assign(this.user,this.registerform.value);
    // this.addUser(this.user);
}

// addUser(user: any){
//   let users=[];
//   if( localStorage.getItem('Users')){
//     users=JSON.parse(localStorage.getItem('Users')!);
//   }
//   else{
//     users=[user];
//   }
//   localStorage.setItem('Users',JSON.stringify(this.user));
// }