import {bindable} from 'aurelia-framework';

export class ViewProperty {
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

  valueChanged(newValue, oldValue) {

  }
}

