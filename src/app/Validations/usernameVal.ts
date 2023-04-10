import { AbstractControl, FormControl } from "@angular/forms";

// export function forbiddinNameVal(control:AbstractControl)
// {
// const forbidden=/Admin/.test(control.value) ||/Adminstrator/.test(control.value);

// return forbidden? {'forbiddenvalue':{value:control.value}} : null ;
// }

export function forbiddinNameVal(controlname:RegExp)
{
return (control:AbstractControl)=>{
   const forbidden=controlname.test(control.value) ;

  return forbidden? {'forbiddenvalue':{value:control.value}} : null ; 
}
}