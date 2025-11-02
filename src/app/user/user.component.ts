import { Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;

  // Decorator approach
  // @Input({ required: true }) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // Signal Approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return '../assets/users/' + this.avatar();
  // });

  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

/* Note to self: ng generate component [name] (ng g c [name]) will create a new component folder */

/* Make a user component random

import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // selectedUser = DUMMY_USERS[randomIndex];

  // This is a getter
  // get imagePath() {
  //   return '../assets/users/' + this.selectedUser.avatar;
  // }

  // Random generate a new user by clicking on the button
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex])
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
*/

