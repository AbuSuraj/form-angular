import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FORM';
  topics = ['Angular', 'React', 'VUe', 'NextJs'];
  userModel = new User('', '', 2,'default','', false);
  topicHasError = true;
  submitted = false;
  constructor(private _enrollmentService: EnrollmentService) {

  }
  validateTopic(value: string){
    if(value ==='default')
    this.topicHasError = true;

  else
    this.topicHasError = false;
}
onSubmit(){
  this.submitted = true;
 this._enrollmentService.enroll(this.userModel)
 .subscribe(
  data => console.log("succes!", data),
  error => console.log('error', error)
 )
}
}
