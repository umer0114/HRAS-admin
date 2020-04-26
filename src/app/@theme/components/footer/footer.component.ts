import { Component } from '@angular/core';

@Component({
  selector: 'hras-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
