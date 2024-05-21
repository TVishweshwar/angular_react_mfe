import { Component } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss',
})
export class ReceiverComponent {
  eventData: any;
  ngOnInit(): void {
    // window.addEventListener('info', (evt) => {
    //   // const data = evt.detail.data;
    //   console.log('angular', evt);
    // });

    window.addEventListener('info', (evt: Event) => {
      const customEvent = evt as CustomEvent;
      if (customEvent) {
        const eventData = customEvent.detail;
        console.log('Angular Shell', eventData.data.name);
        this.eventData = eventData.data.name; // Assign to a component property for rendering
      }
    });
  }
}
