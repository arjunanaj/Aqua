import { Component } from '@angular/core';
import{ faUser ,faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username=faUser
  password=faLock
  envelope=faEnvelope
}
