import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './models/user';
import { ValidationsComponent } from './validations/validations.component';
import { ErrorMessagesComponent } from "./error-messages/error-messages.component";

@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule, CommonModule, ValidationsComponent, ErrorMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TD_forms';
  technologies=['Frontend','Backend','Database']

//  bindind form data to a model, which means changing the existing data by using [(ngmodel)]
// and sendind to the server

userModel= new User('vineeth','vkr2gmail.com',990852,'','morning',true)
}
