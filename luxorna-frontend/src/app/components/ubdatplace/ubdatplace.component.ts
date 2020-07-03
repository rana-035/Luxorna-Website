import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ubdatplace',
  templateUrl: './ubdatplace.component.html',
  styleUrls: ['./ubdatplace.component.css']
})
export class UbdatplaceComponent implements OnInit {

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
