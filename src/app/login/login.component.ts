import { Component } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}

