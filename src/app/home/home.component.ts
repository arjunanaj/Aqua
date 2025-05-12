import { Component } from '@angular/core';
import{ faDroplet,faWater,  } from '@fortawesome/free-solid-svg-icons';
import{faPhoneAlt ,faLocation} from '@fortawesome/free-solid-svg-icons';
import{ faEnvelope} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 water=faWater;
 drop=faDroplet;
 address=faLocation
 call=faPhoneAlt 
 mail=faEnvelope
}
