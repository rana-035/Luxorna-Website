import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantService } from 'src/app/services/resturant.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {


  
  constructor(private activeRoute:ActivatedRoute,private service:ResturantService,private serviceSize:SizeService) {
    
   }
   
  listOfResturantItems:any=[{}]
  returantItem:any={ID:0,Image:"",Name:"",ResturantID:0, itemListDetaile:[{ID:0,ItemID:0,Price:0,sizeID:0,Size:""}]}
 

  sizes

  itemPrice
  itemname
  itemImgPath
  itemSize
  ID=0
  imgPath

  subscriberSize
  ImageItem
  //iconresturant.png
  itemDetaile

  ngOnInit(): void {
    this.subscriberSize=this.serviceSize.getSizes()
    .subscribe(
      (_sizes)=>{
        if(_sizes)
        {
          this.sizes=_sizes;
          console.log(this.sizes);
        }
      },
      (err)=>{
        console.log(err);
      }

    );
  }
  showAddItem(){
 
   

   }
  showItem(item){}
  deleteItem(item){}
  cancleItemUpdate(){}
  addSingleItem(){
  
    // name , img,smallprice,mediumPrice,largeSize
    this.itemname = document.getElementById("itemName");
    let name=this.itemname.value;
    // let sizeID=this.itemSize.value;
    //itemPrice
    this.itemPrice = document.getElementById("smallSize");
    let smallPrice=this.itemPrice.value;

    this.itemPrice = document.getElementById("mediumSize");
    let mediumPrice=this.itemPrice.value;

    //largeSize
    this.itemPrice = document.getElementById("largeSize");
    let largeSize=this.itemPrice.value;
    console.log(name);
    console.log(smallPrice);
    console.log(mediumPrice);
    console.log(largeSize);


    this.returantItem.Image=this.imgPath;
    this.returantItem.Name=name;


console.log
("dddd",this.sizes)



    if(smallPrice>0)
      this.returantItem.itemListDetaile.push({Price:smallPrice,SizeID:1,Size:this.sizes[0].Name});
    if(mediumPrice>0)
      this.returantItem.itemListDetaile.push({Price:mediumPrice,SizeID:2,Size:this.sizes[1].Name});
    if(largeSize>0)
      this.returantItem.itemListDetaile.push({Price:largeSize,SizeID:3,Size:this.sizes[2].Name});
    
    console.log(this.returantItem);

  }
  selectedSizeHandler(event:any){}
  fileHandler(file){
    this.imgPath=file[0].name;
   // this.itemDetaile.Image=this.imgPath;
    this.ImageItem="assets/pictures/imgRestaurant/".concat(this.imgPath);
     console.log(this.ImageItem); 
  }
}
