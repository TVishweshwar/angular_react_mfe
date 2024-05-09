import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    matcher: startsWith('mfe1'),
    component: WrapperComponent,
    data: { importName: 'mfe1', elementName: 'mfe1-element' },
  },
  {
    matcher: startsWith('mfe4'),
    component: WrapperComponent,
    data: { importName: 'mfe4', elementName: 'mfe4-element' },
  },
  {
    matcher: startsWith('angular17'),
    component: WrapperComponent,
    data: { importName: 'mfe5', elementName: 'mfe5-element' },
  },
  {
    matcher: startsWith('angular3'),
    component: WrapperComponent,
    data: { importName: 'mfe6', elementName: 'angular3-element' },
    canActivate: [authGuard],
  },
  {
    matcher: startsWith('mfe8'),
    component: WrapperComponent,
    data: { importName: 'mfe8', elementName: 'mfe8-element' },
  },
  {
    path: '',
    redirectTo: 'mfe4',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
