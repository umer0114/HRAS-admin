import { Injectable } from '@angular/core';

const confSettings = {
  local: {
    localHost: 'localhost',
    localProtocol: 'http://',
    localPort: '4200',
    localPath: '/api/',
  },
};

@Injectable({
  providedIn: 'root',
})
export class GlobalConfigurationsService {

  server: string;
  constructor() { }

  setDefaultConfigurations(server) {
    this.server = server;
  }

  getApiUrl() {
    const settings = confSettings[this.server] || confSettings;
    const host = settings.host || settings[`${this.server}Host`] || '';
    const protocol = !/^http.?:\/\//gi.test(host) && ((settings.protocol || settings[`${this.server}Protocol`]) || 'http://') || '';
    let port = settings.host || settings[`${this.server}Port`] || '';
    port && (port = `:${port}`);
    const urlPath = settings.path || settings[`${this.server}Path`] || '';
    return `${protocol}${host}${port}${urlPath}`;
  }
}
