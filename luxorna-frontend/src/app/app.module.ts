import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AdminlayoutComponent}from './components/adminlayout/adminlayout.component'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { SectionComponent } from './components/section/section.component';
import { AppRoutingModule } from './app-routing.module';
import{MainComponent}from'./components/main/main.component';
import { ResturantsComponent } from './components/resturants/resturants.component';
import { AddNewSectionComponent } from './components/add-new-section/add-new-section.component';
import { UpdatesectionComponent } from './components/updatesection/updatesection.component';
import { HomeComponent } from './components/home/home.component';
import{AddPlaceComponent}from './components/add-place/add-place.component';
import{UbdatplaceComponent}from'./components/ubdatplace/ubdatplace.component';
import{AdminsComponent}from'./components/admins/admins.component';
import{CreateAdminComponent}from './components/create-admin/create-admin.component';
import { HttpClientModule ,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
 import{FilterPipe} from'./pipe/Filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

//  import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { MyFilterPipe } from './shared/pipes/my-filter.pipe';

// import {  MatSortModule } from '@angular/material/sort';
// import { MatTableModule,MatTableDataSource  } from '@angular/material/table';
// import {MatPaginatorModule  } from '@angular/material/paginator';



import { AdminLoginService } from './services/admin-login.service';
import { ResturantService } from './services/resturant.service';
import { SizeService } from './services/size.service';
//import { TokenService } from './services/tocken.service';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelService } from './Services/hotel.service';
import { AddhotelComponent } from './components/addhotel/addhotel.component';
import { AddtempleComponent } from './components/addtemple/addtemple.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { TempleComponent } from './temple/temple.component';
import { UpdateTempleComponent } from './components/update-temple/update-temple.component';



	


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AdminlayoutComponent,
    SectionComponent,
    ResturantsComponent,
    AddNewSectionComponent,
    UpdatesectionComponent,
    HomeComponent,
    AddPlaceComponent,
    UbdatplaceComponent,
    AdminsComponent,
    CreateAdminComponent,
    FilterPipe,
    UpdateResturantComponent,
    UpdateHotelComponent,
    AddhotelComponent,
    HotelComponent,
    TempleComponent,
    AddtempleComponent,
    UpdateTempleComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    // Ng2SearchPipeModule
    //Ng2SearchPipeModule
    // MatPaginatorModule,
    // MatSortModule,
    // MatTableModule,
    // MatTableDataSource
    
   

  ],
  providers: [AdminLoginService,ResturantService,SizeService,HotelService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
