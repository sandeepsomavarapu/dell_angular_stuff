import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
Data:Array<any>=[
{name:'Telugu',value:'telugu'},
{name:'Hindi',value:'hindi'},
{name:'English',value:'english'},
{name:'Tamil',value:'tamil'},
{name:'Kannada',value:'kannda'},
];

onCheckboxChange(e) {
  const lang: FormArray = this.myForm.get('lang') as FormArray;
  if (e.target.checked) {
    lang.push(new FormControl(e.target.value));
  } else {
    let i: number = 0;
    lang.controls.forEach((item: FormControl) => {
      if (item.value == e.target.value) {
        lang.removeAt(i);
        return;
      }
      i++;
    });
  }
}
  ngOnInit()
  {
    this.myForm=this.fb.group({
      name:['DellUser',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      cnum:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      lang:this.fb.array([],Validators.required),
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
    console.log(form.value.lang);
  }

}
