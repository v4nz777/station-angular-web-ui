import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormControl,FormGroupDirective,FormsModule,NgForm, ReactiveFormsModule, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


export class PasswordMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isPasswordMatched = form?.control.controls['password'].value === control?.value
      const isPasswordAndConfirmationFilled = form?.control.controls['password'].value&&control?.value
      return isPasswordAndConfirmationFilled&&!isPasswordMatched
  }
}

export class UsernameMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const fieldValue = control?.value
      return fieldValue && this.isUsernameExists(fieldValue)
  }
  isUsernameExists(userName:string|null):boolean{
    //  Todo
    return false
  }
}


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() switchEvent = new EventEmitter<string>();

  toLoginMode(){
    this.switchEvent.emit('login')
  }

  usernameMatcher = new UsernameMatcher();
  passwordMatcher = new PasswordMatcher();

  registrationFormControlGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
  })

  onSubmit(){
    if(this.registrationFormControlGroup.valid){
      //Todo API Call
    }

  }


}
