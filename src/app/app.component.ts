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
  userModel = new User('Rob', 'rob@gmail.com', 5423431,'','morning', true);
}
