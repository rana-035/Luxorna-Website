import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TempleService } from 'src/app/Services/temple.service';

@Component({
  selector: 'app-update-temple',
  templateUrl: './update-temple.component.html',
  styleUrls: ['./update-temple.component.css']
})
export class UpdateTempleComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private router:Router,
    private _templeService:TempleService) { }
    temple:any={}
    subscriber;
    public TempleID:number;
    public TempleName:string;
    public TempleDescription:string;
    public TicketPrice:number;
    public Address:string;
    //public ImageID:number;
     TempleImages=[];
    public SectionID:number=3;
  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
    this.subscriber=this._templeService.getTempleById(this.activeRoute.snapshot.params['id'])
    .subscribe(
      (_temple:any)=>{
        if(_temple && _temple.Data)
        {
          this.temple=_temple.Data;
          this.TempleName=this.temple.Name;
          this.TempleDescription=this.temple.Description;
          this.Address=this.temple.Address;
          this.TicketPrice=this.temple.Price;
          this.TempleImages=this.temple.TempleImages;
          console.log(this.temple);
         
        }

      },
      (err)=>
      {
        console.log(err);
      }
    );
  }
  updateTemple(){
    this.temple ={
      ID:this.activeRoute.snapshot.params['id'],
      Name:this.TempleName,
      Description:this.TempleDescription,
     TicketPrice:this.TicketPrice,
      SectionID:this.SectionID,
      Address:this.Address,
     TempleImages:this.TempleImages
    };
    this.subscriber=this._templeService.UpdateTemple(this.temple)
    .subscribe
    (
      (obj:any)=>
      {
        console.log(obj);
        this.router.navigate(['adminlayout/temple']);

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
      this._templeService.upload(formData).subscribe(
        (data: any) => {
          console.log("s",data)
          data.Data.forEach(element => {
            this.TempleImages.push({
              //ID:this.ImageID,
              TempleID:this.activeRoute.snapshot.params['id'],
              Image: element.Path
            });
          });
         console.log(this.temple.Image)
        },
        (err) => {
          console.log(err)
        })
    }
  }
  }


