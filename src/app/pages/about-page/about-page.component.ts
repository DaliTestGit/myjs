import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AboutBackendService } from "../../services/about/about-backend.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  backendInfoResultAsyncPipe: Observable<string>;
  backendInfoResult: string;
  errorMessage = '';
  isLoading = true;

  constructor(private aboutBackendService: AboutBackendService ) { }

  ngOnInit() {
    this.getBackendInfo();
  }

  getBackendInfo() {
    console.log('===========>AboutPageComponent.getBackendInfo');
    this.isLoading = true;

    // use the old subscribe binding
    this.aboutBackendService
      .getBackendInfo()
      .subscribe(
        /* happy path */ p => this.backendInfoResult = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);

    // use the new async pipe
    this.backendInfoResultAsyncPipe =  this.aboutBackendService.getBackendInfo();
  }

}
