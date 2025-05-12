import { Component } from '@angular/core';
import{ faUser ,faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import{faPhoneAlt , faPhoneSquare,faMapLocationDot,faLocation} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  username=faUser
  password=faLock
  envelope=faEnvelope
  address=faLocation
  call=faPhoneAlt 
  mail=faEnvelope

  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  zoom = 12;
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 10.910616, lng: 79.369259 }

  ];
}

