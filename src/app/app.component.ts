import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ang_Detergent';
   constructor(private el: ElementRef, private renderer: Renderer2) {}
  
}
