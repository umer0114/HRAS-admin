
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GlobalConfigurationsService} from './global-configurations.service';

@Component({
  selector: 'hras-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private globalConfigurationsService: GlobalConfigurationsService, private translate: TranslateService) {
    globalConfigurationsService.setDefaultConfigurations('local');
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }
}
