import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';

export class WsUtils {

  static getWsUrl() {
    return location.protocol + '//' + location.hostname + environment.backendUrl;
  }

  static  getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  static handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Oops! There was a problem calling the WS!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
  }

}
