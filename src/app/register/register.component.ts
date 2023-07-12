import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:FormGroup;
        constructor(private fb:FormBuilder)
        {

        }
  ngOnInit()
  {
    this.myForm=this.fb.group({
      name:['DellUser',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      cnum:['',[Validators.required,]],
      remember:['',[Validators.required]]
    })
  }
  onSubmit(form:FormGroup)
  {
    console.log(form);
    console.log(form.valid);
    console.log(form.value.name);
    console.log(form.value.password);
    console.log(form.value.email);
    console.log(form.value.cnum);
    console.log(form.value.remember);
    
  }

}
