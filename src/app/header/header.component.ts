import { Component } from '@angular/core';
import{ faShoppingCart ,faSignIn, faBarsStaggered,faWater } from '@fortawesome/free-solid-svg-icons';
import{ faDroplet  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  shoppingcart=faShoppingCart
  signIn=faSignIn
  menu=faBarsStaggered
  water=faDroplet
  
  
}
