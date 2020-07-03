import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/Services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  constructor(private _hotelService: HotelService,private router:Router) { }

  ngOnInit(): void {
  
  }
  subscriber;
  public HotelName:string;
  public HotelDescription:string;
  public HotelStars:number;
  public HotelPrice:number;
  public Address:string;
  HotelImages=[];
  public hotel;
  public SectionID:number=2;
  imgPath;
  ImageItem;
 // files:[];


  //public hotel:any[] =[{HotelName:this.HotelName,HotelDescription:this.HotelDescription,Stars:this.Stars,HotelPrice:this.HotelPrice}]
  selectChangeHandler (event: any) {
    //update the ui
    this.HotelStars = event.target.value;
  }
  addHotel(){
    this.hotel ={
      Name:this.HotelName,
      Description:this.HotelDescription,
      Stars:this.HotelStars,
      Price:this.HotelPrice,
      SectionID:this.SectionID,
      Address:this.Address,
      HotelImages:this.HotelImages
    };
   //console.log(this.files);
    this.subscriber=this._hotelService.AddHotel(this.hotel)
    .subscribe
    (
      (obj:any)=>
      {
        console.log(obj);
        this.router.navigate(['adminlayout/hotel'])

      },(err)=>{console.log(err)}
    );
  }
  // onfileChange(event)
  // {
  //   this.files=event.target.files;
  //   console.log(this.files)
  // }
  // upload(){
  //   let formData: FormData = new FormData();
  //   for (var j = 0; j < this.files.length; j++) {
  //         formData.append("file[]", this.files[j], this.files[j].name);
  //       }
    
  //  this._hotelService.upload(formData)
  //  .subscribe(
  //  (res: any) => 
  //  {
  //    this.hotel.Image =  res.Data[0].Path;
  //    console.log(res);
  //  }
  //  );
  // }

  files = [];
  onFileChange(event) {
    console.log(event);
    this.files = event.target.files;
    console.log
    ("WAW", this.files);
  }


  upload() {
    let formData: FormData = new FormData();
    for (var j = 0; j < this.files.length; j++) {
      formData.append("file[]", this.files[j], this.files[j].name);
      this._hotelService.upload(formData).subscribe(
        (data: any) => {
              if(data.Data && data.Data.length >0 && data.Successed){
                console.log( data);
                data.Data.forEach(element => {
                  this.HotelImages.push({
                    ID:0,
                    HotelID:0,
                    Image: element.Path
                  });
                });
              }

              console.log
              (this.HotelImages);
        },
        (err) => {
          console.log(err);
        });
    }
  }

  
}
