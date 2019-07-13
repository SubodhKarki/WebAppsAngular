import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div> <h1>{{title}}</h1>
  <div></div>
  <pm-product-list></pm-product-list>
  </div>
`
})
export class AppComponent {
  title: String = 'Product Management demo';
}
