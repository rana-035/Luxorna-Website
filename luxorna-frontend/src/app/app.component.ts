import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  @HostListener("window:onbeforeunload",["$event"])
    clearLocalStorage(event){
        localStorage.clear();
    } 
}
// window.addEventListener("focus", e => {
//   console.log("onFocus", e);
//   sessionStorage.clear();
//   localStorage.clear();
// });
