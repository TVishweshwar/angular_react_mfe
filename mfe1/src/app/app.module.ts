import { DoBootstrap, Injector, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  FloatLabelType,
  MatFormFieldModule,
} from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    HomeComponent,
    ButtonComponent,
    FormComponent,
    DynamicLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [], //AppComponent removed
})
// implement DoBootstrap
export class AppModule implements DoBootstrap {
  constructor(private ngZone: NgZone, private injector: Injector) {
    (window as any).ngZone = this.ngZone;
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe1-element', ce);
    const ce1 = createCustomElement(ButtonComponent, {
      injector: this.injector,
    });
    customElements.define('mfe1-belement', ce1);

    const ce2 = createCustomElement(FormComponent, {
      injector: this.injector,
    });
    customElements.define('mfe1-felement', ce2);
    // <mfe1-element></mfe1-element>
  }
}
