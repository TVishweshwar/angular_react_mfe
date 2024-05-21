import { Component } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.scss',
})
export class PublisherComponent {
  handleEmitEvent = () => {
    window.dispatchEvent(
      new CustomEvent('info', {
        detail: { data: { name: 'Hi' } },
      })
    );
  };
}
