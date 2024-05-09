import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { endsWith } from './router.utils';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const MFE1_ROUTES: Routes = [
  { matcher: endsWith('a'), component: AComponent },
  { matcher: endsWith('b'), component: BComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
