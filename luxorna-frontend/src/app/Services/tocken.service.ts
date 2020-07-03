// import { Injectable,Injector } from '@angular/core';
// import { HttpClient ,HttpInterceptor} from '@angular/common/http';
// import{ResturantService} from './resturant.service'


// @Injectable({
//   providedIn: 'root'
// })
// export class TokenService  implements HttpInterceptor{

//   private token=localStorage.getItem('token');

//   constructor(private injector:Injector) {

// console.log
// (this.token);

//    }
  
//   intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http")
//     .HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        
//         let tokenRequest=req.clone({
      
//       setHeaders:{
//         Authorization: 'Bearer '.concat(this.token)
//       }
//     })
//     return next.handle(tokenRequest)
//     }
// }
