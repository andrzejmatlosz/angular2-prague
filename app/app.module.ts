
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuModule } from './menu/menu.module';
import { ViewChildExampleModule } from './viewChildExample/viewChildExample.module';
import { ContentChildExampleModule } from './contentChildExample/contentChildExample.module';
import { PipeExampleModule } from './pipeExample/pipeExample.module';
import { DirectiveExampleModule } from './directiveExample/directiveExample.module';
import { HttpExampleModule } from './httpExample/httpExample.module';
import { LifecycleHooksExampleModule } from './lifecycleHooksExample/lifecycleHooksExample.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        MenuModule,
        ViewChildExampleModule,
        ContentChildExampleModule,
        PipeExampleModule,
        DirectiveExampleModule,
        HttpExampleModule,
        LifecycleHooksExampleModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }