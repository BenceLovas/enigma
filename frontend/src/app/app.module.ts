import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ProjectService } from './project.service';
import { UserAuthenticationService } from './user/user-authentication.service';
import { ProjectTableComponent } from './project-details/project-table/project-table.component';
import { TaskFormComponent } from './project-details/task-form/task-form.component';
import { TaskService } from './task.service';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TaskFormComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DragulaModule,
  ],
  providers: [
    UserService,
    UserAuthenticationService,
    ProjectService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
