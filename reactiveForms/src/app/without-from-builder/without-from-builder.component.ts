import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-without-from-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './without-from-builder.component.html',
  styleUrl: './without-from-builder.component.scss'
})
export class WithoutFromBuilderComponent {

   userForm = new FormGroup({
    fName : new FormControl('',[Validators.required,Validators.minLength(5)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    adress: new FormGroup({
      state : new FormControl(''),
      city  : new FormControl(''),
      pincode:new FormControl('')
    })
  })
}
