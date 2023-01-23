import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userData = {
    email: '',
    password: '',
  };
  onSubmit(form: any, formData: any) {
    console.log('submitted formdata', formData);

    alert('Form submitted successfully');

    form.reset();
  }
}
