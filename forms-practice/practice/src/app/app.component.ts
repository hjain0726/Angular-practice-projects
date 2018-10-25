import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Rective approach

  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }



  // Template driven approach

  /*@ViewChild('f') signupform: NgForm;
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
  onSubmit() {
    console.log(this.signupform);
    this.submitted = true;
    this.user.username = this.signupform.value.userData.username;
    this.user.email = this.signupform.value.userData.email;
    this.user.secretQuestion = this.signupform.value.secret;
    this.user.answer = this.signupform.value.questionanswer;
    this.user.gender = this.signupform.value.gender;
    this.signupform.reset();
  }*/
  /*suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupform.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    //this.signupform.setValue({
    // userData:{
    //    username:suggestedName,
    //    email:''
    //  },
    //  secret:'pet',
    //  questionanswer:'',
    //  gender:'male'
    });
}*/
  /*onSubmit(form:NgForm){
    console.log(form);
  }*/

}