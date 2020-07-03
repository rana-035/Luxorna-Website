import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../Services/hotel.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private router:Router,
    private _hotelService:HotelService) { }
   hotel:any={}
  subscriber;
  public HotelID:number;
  public HotelName:string;
  public HotelDescription:string;
  public HotelStars:number;
  public HotelPrice:number;
  public Address:string;
  //public hotel:object
  public HotelImage:any[];
  public SectionID:number=2;

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
    this.subscriber=this._hotelService.getHotelById(this.activeRoute.snapshot.params['id'])
    .subscribe(
      (_hotel:any)=>{
        if(_hotel && _hotel.Data)
        {
          this.hotel =_hotel.Data;
          this.HotelName=this.hotel.Name;
          this.HotelDescription=this.hotel.Description;
          this.Address=this.hotel.Address;
          this.HotelPrice=this.hotel.Price;
          this.HotelStars=this.hotel.Stars;
          this.HotelImage=this.hotel.Image;

          console.log(this.hotel);
         
        }

      },
      (err)=>
      {
        console.log(err);
      }
    );
  }
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
   }
  selectChangeHandler (event: any) {
    //update the ui
    this.HotelStars = event.target.value;
  }
  updateHotel(){
    this.hotel ={
      ID:this.activeRoute.snapshot.params['id'],
      Name:this.HotelName,
      Description:this.HotelDescription,
      Stars:this.HotelStars,
      Price:this.HotelPrice,
      SectionID:this.SectionID,
      Address:this.Address,
      Image:this.hotel.HotelImage
    };
    this.subscriber=this._hotelService.UpdateHotel(this.hotel)
    .subscribe
    (
      (obj:any)=>
      {
        console.log(obj);
        this.router.navigate(['adminlayout/hotel']);

      },(err)=>{console.log(err)}
    );
  }
  files = [];
  onFileChange(event) {
    console.log(event);
    this.files = event.target.files;
  }


  upload() {
    let formData: FormData = new FormData();
    for (var j = 0; j < this.files.length; j++) {
      formData.append("file[]", this.files[j], this.files[j].name);
      this._hotelService.upload(formData).subscribe(
        (data: any) => {
          console.log("s",data)
         this.hotel.Image= data.Data[0].Path;
         console.log(this.hotel.Image)
        },
        (err) => {
          console.log(err)
        })
    }
  }
}
