import { Component, OnInit } from '@angular/core';

declare var $: any;



@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $('#colorselector').change(function(){
          $('.colors').hide();
          $('#' + $(this).val()).show();
          var $inputDisabled = $("#inputDisabled")
          var $disabledSwitch = $("#disabledSwitch")
          $disabledSwitch.on("change", function () {
              $inputDisabled.prop("disabled", $(this).prop("checked"))
          })

      });
  });

  }


}
