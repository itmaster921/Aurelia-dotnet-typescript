import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  // aurelia.use
  //   .plugin('aurelia-plugins-google-maps', config => {
  //     config.options({
  //       apiScriptLoadedEvent: 'aurelia-plugins:google-places-autocomplete:api-script-loaded', // if loadApiScript is false, the event that is subscribed to, to know when the Google Maps API is loaded by another plugin 
  //       key: '', // your Google API key retrieved from the Google Developer Console 
  //       language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization 
  //       libraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries 
  //       loadApiScript: false, // | false, // whether or not the <script> tag of the Google Maps API should be loaded 
  //       options: { panControl: true, panControlOptions: { position: 9 } } // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions 
  //     });
  //   });
                                                                                                                                                                                                                                                                                                                                                                                                  
    

    aurelia.use
        .plugin('aurelia-google-analytics', config => {
          config.init('UA-96381942-2');
          config.attach({
            logging: {
              enabled: true
            },
            pageTracking: {
              enabled: true
            },
            clickTracking: {
              enabled: true
            },
            exceptionTracking: {
              enabled: true
            }
          });
        })
        .plugin('aurelia-google-maps', config => {
            config.options({
                apiKey: 'AIzaSyCOu0sPCXSd1DhyWA2tjkiCt6gEUEWJP88', // use `false` to disable the key
                apiLibraries: 'drawing, geometry', //get optional libraries like drawing, geometry, ... - comma seperated list
                options: { panControl: true, panControlOptions: { position: 9 } } //add google.maps.MapOptions on construct (https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
            });
        });

    // await aurelia.start();
    // aurelia.setRoot('app');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
