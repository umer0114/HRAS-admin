import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConfigurationsService} from "../../global-configurations.service";

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(
    private http: HttpClient,
    private GlobalConfigurationsService: GlobalConfigurationsService
  ) { }

  apiUrl: string = this.GlobalConfigurationsService.getApiUrl();
  fetchInterviews() {
    return this.http
      .get(
        this.apiUrl + 'interview/interviews'
      );
  }
}
