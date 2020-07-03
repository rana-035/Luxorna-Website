import { Component, OnInit } from '@angular/core';
import {ResturantService} from 'src/app/services/resturant.service';
import { Router } from '@angular/router';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { FormGroup } from '@angular/forms';

// export interface DialogData {  
//   environment: string;    
//   dialogTitle: string;
// }

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.css']
})

export class ResturantsComponent implements OnInit {

  term:string
  config: any;
  collection = { count: 2, data: [] };

  constructor(private router:Router,private service:ResturantService) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      // totalItems: this.resturents.length
    };
   }
   pageChanged(event){
    this.config.currentPage = event;
  }

  subscriber
  // environmentDetailsForm: FormGroup;
  // serverErrorMessages : string;

  // displayedColumns = ['Select', 'Name', 'Address', 'Create Date', 'Section'];
  
  resturents:[{ID,Name,Address,SectionName,CreateDate}]
  ngOnInit(): void {
    this.subscriber=this.service.getAllResturants()
    .subscribe(
      (_resturents:any)=>{
        if(_resturents && _resturents.Data)
        {
          this.resturents=_resturents.Data;
          console.log(this.resturents);
        }
      },
      (err)=>{
        console.log(err);
      }  
    );
  }
  


}
