import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AboutBackendService } from "../services/about/about-backend.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  backenInfoResultAsyncPipe: Observable<string>;
  backenInfoResult: string;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private aboutBackendService:AboutBackendService) { }

  ngOnInit() {
    this.getBackendInfo();
  }

  getBackendInfo() {
    console.log('===========>AboutPageComponent.getBackenInfo');
    this.isLoading = true;
    this.aboutBackendService
      .getBackendInfo()
      .subscribe(
        /* happy path */ p => this.backenInfoResult = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
    this.backenInfoResultAsyncPipe =  this.aboutBackendService.getBackendInfo();
  }

}
