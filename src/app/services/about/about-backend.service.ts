import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WsUtils } from '../common/WsUtils';

@Injectable()
export class AboutBackendService {

  baseUrl = environment.backendUrl;

  constructor(private http: Http) {}

  getBackendInfo(): Observable<string> {
    const applicationInfo = this.http
      .get(`${this.baseUrl}/version`, { headers: WsUtils.getHeaders()})
      .map(mapInfoResponse)
      .catch(WsUtils.handleError);

    return applicationInfo;
  }
}

function mapInfoResponse(response:Response): string {
  console.log('===========>mapInfoResponse' + response);
  return JSON.stringify(response.json());
}


