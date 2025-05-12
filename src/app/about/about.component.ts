import { Component } from '@angular/core';
import{ faDroplet,faWater, faCertificate,faFlask,faFilter,faGlassWater } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  water=faWater;
  drop=faDroplet;
certificate=  faCertificate;
flask=faFlask;filter= faFilter;micro=faGlassWater;
}
