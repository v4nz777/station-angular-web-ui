import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    ReactiveFormsModule

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() switchEvent = new EventEmitter<string>();

  loginUserControlGroup = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  isErrorState = false;

  getAccessToken(userName:string|null, password:string|null): string|null{
    // Todo
    return 'Bearer aCCessTokenSample123XyZ!@#'
  }

  onSubmit():void {
    let userName = this.loginUserControlGroup.controls['userName'].value
    let password = this.loginUserControlGroup.controls['password'].value
    let accessToken = this.getAccessToken(userName,password)

    //Todo accessToken
    this.isErrorState = true;
    console.log(userName,password, accessToken)
  }

  toRegistrationMode():void{
    this.switchEvent.emit('registration')
  }
}
