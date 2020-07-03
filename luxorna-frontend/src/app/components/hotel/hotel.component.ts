import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HotelService } from 'src/app/Services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  term:string;
  config: any;
  collection = { count: 2, data: [] };
  constructor(private router:Router,private _hotelService:HotelService) { 
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
  }
}
pageChanged(event){
  this.config.currentPage = event;
}
subscriber  
hotel:[{ID,Name,Address,SectionName,CreateDate}]
  ngOnInit(): void {
      this.subscriber=this._hotelService.getAllHotels()
      .subscribe(
        (_hotel:any)=>{
          if(_hotel && _hotel.Data)
          {
            this.hotel=_hotel.Data;
            console.log(this.hotel);
          }
        },
        (err)=>{
          console.log(err);
        }  
      );
    }
    deleteHotel(id){
      console.log(id,"f")
      this._hotelService.DeleteHotel(id).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigate["adminlayout/hotel"];
        }
      )
      
    }
  }


