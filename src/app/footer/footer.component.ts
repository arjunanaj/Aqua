import { Component } from '@angular/core';
import{faPhoneAlt , faPhoneSquare,faMapLocationDot,faLocation} from '@fortawesome/free-solid-svg-icons';
import{ faInstagram, faFacebookF,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  address=faLocation
  call=faPhoneAlt 
  mail=faEnvelope
  user=faUser
  phone=faPhoneSquare
  location=faMapLocationDot
  fb=faFacebookF
 insta=faInstagram
 whatsup=faWhatsapp

}
