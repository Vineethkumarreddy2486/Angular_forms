import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormbuilderComponent } from "./formbuilder/formbuilder.component";


@Component({
  selector: 'app-root',
  imports: [FormbuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactiveForms';

 


  }

