import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validations',
  imports: [FormsModule,CommonModule],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent {
validation=new User('vineeth','va@gmail.com',99,'frontend','evening',true)
}
