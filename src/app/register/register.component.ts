import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    FirstName: '',
    LastName: '',
    email: '',
    DateOfBirth: '',
    password: '',
    phonenumber: '',
  };
  onSubmit(form: any, formData: any) {
    console.log('submitted formdata', formData);

    alert('Form submitted successfully');

    form.reset();
  }
}
