import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ViewChildExampleParentComponent } from './viewChildExample/viewChildExampleParent/viewChildExampleParent.component';
import { PipeExampleComponent } from './pipeExample/pipeExample.component';
import { DirectiveExampleComponent } from './directiveExample/directiveExample.component';
import { HttpExampleComponent } from './httpExample/httpExample.component';
import { LifecycleHooksExampleComponent } from './lifecycleHooksExample/lifecycleHooksExample.component';
import { ContentChildExampleComponent } from './contentChildExample/contentChildExample.component'

const appRoutes: Routes = [
  { path: 'viewChild', component: ViewChildExampleParentComponent },
  { path: 'contentChild', component: ContentChildExampleComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'directive', component: DirectiveExampleComponent },
  { path: 'http', component: HttpExampleComponent },
  { path: 'lifecycleHooks', component: LifecycleHooksExampleComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
