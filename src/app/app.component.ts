import { Component } from '@angular/core';
import { User } from './user';
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
  validateTopic(value: string){
    if(value ==='default')
    this.topicHasError = true;

  else
    this.topicHasError = false;
}
}
