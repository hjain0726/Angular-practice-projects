import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm;
  defaultQuestion = "pet";
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupform.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    /*this.signupform.setValue({
      userData:{
        username:suggestedName,
        email:''
      },
      secret:'pet',
      questionanswer:'',
      gender:'male'
    });*/
  }
  /*onSubmit(form:NgForm){
    console.log(form);
  }*/
  onSubmit() {
    console.log(this.signupform);
    this.submitted = true;
    this.user.username = this.signupform.value.userData.username;
    this.user.email = this.signupform.value.userData.email;
    this.user.secretQuestion = this.signupform.value.secret;
    this.user.answer = this.signupform.value.questionanswer;
    this.user.gender = this.signupform.value.gender;
    this.signupform.reset();
  }
}