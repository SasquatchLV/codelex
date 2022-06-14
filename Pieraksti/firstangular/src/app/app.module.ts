import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { PlannerListComponent } from './components/planner/planner-list/planner-list.component';
import { PlannerFormComponent } from './components/planner/planner-form/planner-form.component';
import { PlannerCardComponent } from './components/planner/planner-card/planner-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    PlannerListComponent,
    PlannerFormComponent,
    PlannerCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
