import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.scss'
})
export class FormbuilderComponent {

  
  // -----------FORM BUILDER----------
  userForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.userForm=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(5)]],
      userEmail:['',[Validators.required,Validators.email]],
      adress:this.fb.group({
        state:[''],
        city:[''],
        pincode:['']
      })

    })
  }


  // creating shortcut ,instead of writing "userForm.get('userName')

  get userName(){
    return this.userForm.get('userName')
  }
 // creating shortcut ,instead of writing "userForm.get('userEmail')
  get userEmail(){
    return this.userForm.get('userEmail')
  }

// script for error handling
  
 get userNameErrors(){
  // creating shortcut instead od writing "this.userName"
  const control=this.userName;
  if(control?.invalid && control?.touched){
    if(control?.errors?.['required']){
      return "username is required"
    }
    if(control?.errors?.['minlength']){
      return "username must contain atleast 5 characters"
    }
  }
  return null
 }



 get userEmailErrors(){
  // creating shortcut instead od writing "this.userEmail"
  const control=this.userEmail
  if(control?.invalid && control?.touched){
    if(control?.errors?.['required']){
      return "Email is required"
    }
    if(control?.errors?.['email']){
      return "Invalid email format"
    }
  }
  return null
 }

 onSubmit(){
  console.log('Form is successfully submitted')
  this.userForm.reset()
 }
}
