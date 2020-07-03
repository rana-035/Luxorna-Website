import { Component, OnInit } from '@angular/core';
import { TempleService } from 'src/app/Services/temple.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtemple',
  templateUrl: './addtemple.component.html',
  styleUrls: ['./addtemple.component.css']
})
export class AddtempleComponent implements OnInit {

  constructor(private _templeService: TempleService,private router:Router) { }

  ngOnInit(): void {
  }
  subscriber;
  public TempleName:string;
  public TempleDescription:string;
  //public TempleStars:number;
  public TicketPrice:number;
  public Address:string;
  TempleImages=[];
  public temple;
  public SectionID:number=3;
  imgPath;
  ImageItem;
  addTemple(){
    this.temple ={
      Name:this.TempleName,
      Description:this.TempleDescription,
      
      TicketPrice:this.TicketPrice,
      SectionID:this.SectionID,
      Address:this.Address,
      TempleImages:this.TempleImages
    };
   //console.log(this.files);
    this.subscriber=this._templeService.AddTemple(this.temple)
    .subscribe
    (
      (obj:any)=>
      {
        console.log(obj);
        this.router.navigate(['adminlayout/temple'])

      },(err)=>{console.log(err)}
    );
  }
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
      this._templeService.upload(formData).subscribe(
        (data: any) => {
              if(data.Data && data.Data.length >0 && data.Successed){
                console.log( data);
                data.Data.forEach(element => {
                  this.TempleImages.push({
                    ID:0,
                    TempleID:0,
                    Image: element.Path
                  });
                });
              }

              console.log
              (this.TempleImages);
        },
        (err) => {
          console.log(err);
        });
    }
  }


}
