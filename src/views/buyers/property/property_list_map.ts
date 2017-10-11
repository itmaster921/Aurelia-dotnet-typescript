import {bindable} from 'aurelia-framework';
import * as $ from 'jquery';

export class PropertyListMap {
  @bindable value;

  public property_markers = [
    {
        latitude: 37.323,
        longitude: -122.0527,
        icon: '/images/icon_map_pin.png',
        title: 'Dummy Marker',
        custom: {id: 123456},
        infoWindow: {content: `
                <div id="pin-content">
                  <span>TEST</span>
                </div>`}
    }
  ];
  
  attached () {
    
    $('.btn-toogle-property').click(function(){
        $('.left-slide').toggleClass('slide-effect');
    });
    // $(document).ready(function() {
    //   console.log("ready!");
    // });
  }
  valueChanged(newValue, oldValue) {

  }
}

