import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantService } from '../services/resturant.service';
import { SizeService } from '../services/size.service';


@Component({
  selector: 'app-update-resturant',
  templateUrl: './update-resturant.component.html',
  styleUrls: ['./update-resturant.component.css']
})
export class UpdateResturantComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute
              ,private service:ResturantService
              ,private serviceSize:SizeService) { }

  resturant:any={}
  sizes

  subscriber
  subscriberSize

  // name
  // address
  // description
  // items
   images
  itemDetaile:any={}
  oldItemDetaile:any={}

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
    this.subscriber=this.service.getResturantById(this.activeRoute.snapshot.params['id'])
    .subscribe(
      (_resturant:any)=>{
        if(_resturant && _resturant.Data)
        {
          this.resturant =_resturant.Data;
          // this.name=_resturant.Data.Name;
          // this.address=_resturant.Data.Address;
          // this.description=_resturant.Data.Description;
          //  this.items=_resturant.Data.Items;
          //  this.itemDetaile=this.items.ItemDetail;
          // this.images=_resturant.Data.ResturantImages;
         



          //console.log(this.resturant);
        }

      },
      (err)=>
      {
        console.log(err);
      }
    );

    this.subscriberSize=this.serviceSize.getSizes()
    .subscribe(
      (_sizes)=>{
        if(_sizes)
        {
          this.sizes=_sizes;
        }
      },
      (err)=>{
        console.log(err);
      }

    );



    
  }
  SizeID=0;
  Price=0;
  ImageItem=""

  showItem(item){
    this.itemDetaile=item;
    this.oldItemDetaile=item;
  
     console.log(this.itemDetaile);
    // console.log(this.itemDetaile.ID);

    this.SizeID=item.ItemDetail[0].SizeID;
    this.Price=item.ItemDetail[0].Price;
    console.log(this.itemDetaile.Image);
    this.ImageItem="assets/pictures/imgRestaurant/".concat(this.itemDetaile.Image);
  }
  
  deleteItem(item){
    
    
  }
  selectedSizeHandler(event:any){
    console.log("size name");
    
    console.log(Number(event.target.value));
    this.itemDetaile.ItemDetail[0].Size=this.sizes[Number(event.target.value)-1].Name;
    this.itemDetaile.ItemDetail[0].SizeID=Number(event.target.value);
  }
  imgPath="Upload Image"
  fileHandler(file){

    this.imgPath=file[0].name;
    this.itemDetaile.Image=this.imgPath;
    this.ImageItem="assets/pictures/imgRestaurant/".concat(this.imgPath);
     console.log(this.itemDetaile.Image); 
  }
  
  updateSingleItem()
  {
    //this.itemDetaile.ItemDetail[0].SizeID=this.SizeID;
    //this.itemDetaile.ItemDetail[0].Size=this.sizeName;

    console.log("submit");
    this.itemDetaile.ItemDetail[0].Price=this.Price;


    console.log("start update");
    console.log(this.itemDetaile.Name);
    console.log(this.itemDetaile.ItemDetail[0].SizeID);
    console.log(this.itemDetaile.Image);

    console.log(this.itemDetaile);
    console.log(this.resturant);


  }
  cancleItemUpdate()
  {
    console.log(this.oldItemDetaile);
    this.itemDetaile=this.oldItemDetaile;
    console.log(this.resturant);
  }
}
