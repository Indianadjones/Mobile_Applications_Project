// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {//In this file im storing all the information about the website
  production: false,
  apiKey: '678a1a71327fcb0f6788bd35b489197a',
  baseUrl: 'https://api.themoviedb.org/3',//base url to the movie database API
  images: 'http//image.tmbd.org/t/p',//url to the movie images
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
