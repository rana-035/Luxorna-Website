import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import{MainComponent}from'./components/main/main.component'
import{AdminlayoutComponent}from './components/adminlayout/adminlayout.component';

import { LoginComponent } from './components/login/login.component';
import { ResturantsComponent } from './components/resturants/resturants.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AddNewSectionComponent } from './components/add-new-section/add-new-section.component';
import { UpdatesectionComponent } from './components/updatesection/updatesection.component';
import { PreloadAllModules } from '@angular/router';
import{AddtempleComponent}from'./components/addtemple/addtemple.component';
import{AddrestaurantComponent}from'./components/addrestaurant/addrestaurant.component';
import{AddhotelComponent}from'./components/addhotel/addhotel.component'
import{UbdatplaceComponent}from'./components/ubdatplace/ubdatplace.component';
import{AdminsComponent}from'./components/admins/admins.component';
import{CreateAdminComponent}from './components/create-admin/create-admin.component'
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { TempleComponent } from './temple/temple.component';
import { UpdateTempleComponent } from './components/update-temple/update-temple.component';
// const routes :Routes= [
//   {path:'updatesection',component: UpdatesectionComponent },
//     {path:'addsection',component: AddNewSectionComponent },
//   {path:'main',component: MainComponent},
//   {path:'login',component:LoginComponent},
//   {path:'adminlayout',component:AdminlayoutComponent},  
//   {path:'section',component: SectionComponent},
//   {path:'places',component:PlacesComponent},
//   /* تعديل علي section */ 
//   {path:'',redirectTo:'main',pathMatch:'full'}, 
// ] 

const routes :Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'adminlayout', component: AdminlayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      {path:'section',component: SectionComponent},
      {path:'resturant',component:ResturantsComponent},
      {path:'hotel',component:HotelComponent},
      {path:'updatesection',component: UpdatesectionComponent },
      {path:'addsection',component: AddNewSectionComponent },
      {path:'addtemple',component: AddtempleComponent },
      {path:'temple',component: TempleComponent },
      {path:'addrestaurant',component: AddrestaurantComponent },
      {path:'update-resturant/:id',component: UpdateResturantComponent },
      {path:'update-hotel/:id',component: UpdateHotelComponent },
      {path:'update-temple/:id',component: UpdateTempleComponent },

      {path:'addhotel',component: AddhotelComponent },
      {path:'updateplace',component:UbdatplaceComponent },
      {path:'admins',component: AdminsComponent },
      {path:'createAdmin',component: CreateAdminComponent },
      ] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)

    // RouterModule.forRoot(
    //   routes,
    //   {
    //     preloadingStrategy: PreloadAllModules
    //   }
    // )

      //  RouterModule.forChild(routes)

  ],
  exports:[RouterModule]

})

export class AppRoutingModule { }
