import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempleService } from '../Services/temple.service';


@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css']
})
export class TempleComponent implements OnInit {
  term:string;
  config: any;
  collection = { count: 2, data: [] };
  constructor(private router:Router,private _templeService:TempleService) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
  }
   }
   pageChanged(event){
    this.config.currentPage = event;
  }
  subscriber  
temple:[{ID,Name,Address,SectionName,CreateDate}]

  ngOnInit(): void {
    this.subscriber=this._templeService.getAllTemples()
      .subscribe(
        (_temple:any)=>{
          if(_temple && _temple.Data)
          {
            this.temple=_temple.Data;
            console.log(this.temple);
          }
        },
        (err)=>{
          console.log(err);
        }  
      );
    }
    deleteTemple(id){
      console.log(id,"f")
      this._templeService.DeleteTemple(id).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigate["adminlayout/temple"];
        }
      )
      
    }

  }


