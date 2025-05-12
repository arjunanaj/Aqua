import { Component } from '@angular/core';
import{ faUser ,faLock} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
 username=faUser
 password=faLock
}
