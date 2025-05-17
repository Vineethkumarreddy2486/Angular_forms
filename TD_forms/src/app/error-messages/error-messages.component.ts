import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-messages',
  imports: [FormsModule,CommonModule ],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.scss'
})
export class ErrorMessagesComponent {
  technologies =['frontend','backend','database']
  userModel=new User('','v1@gmail.com',1232657890,'default','morning',false);
  // select validation , we need to write a logic which can be also called as custom validation
  techHasError = true
  selectValidation(value : any){
    if(value === "default"){
      this.techHasError = true;
    }else{
      this.techHasError = false
    }
  }

}


