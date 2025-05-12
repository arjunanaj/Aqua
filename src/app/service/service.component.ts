import { Component, OnInit } from '@angular/core';
import{ faDroplet,faWater, faStar,faTruck,faAward,faUsers, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  water=faWater;
  drop=faDroplet;
  star=faStar
  truck=faTruck
  award=faAward
  users=faUsers
  thumbs=faThumbsUp

 waterDelivered:number=0;
 Employee:number=0;
 client:number=0;
 year:number=0;
 ngOnInit(): void {
   this.calcWaterBottle();
   this.calcEmployee();
   this.calcClient()
   this.calcyear()
 }
  calcEmployee(){
   
if(this.Employee<25){
  this.Employee=this.Employee+1;
  setTimeout(() => {
    this.calcEmployee()
  }, 50);
}
  }
 calcWaterBottle(){
   
    if(this.waterDelivered<50){
      this.waterDelivered=this.waterDelivered+1;
      setTimeout(() => {
        this.calcWaterBottle()
      }, 50);
    }
      }

      calcClient(){
   
        if(this.client<99){
          this.client=this.client+1;
          setTimeout(() => {
            this.calcClient()
          }, 50);
        }
          }

          calcyear(){
   
            if(this.year<15){
              this.year=this.year+1;
              setTimeout(() => {
                this.calcyear()
              }, 50);
            }
              }
    
}