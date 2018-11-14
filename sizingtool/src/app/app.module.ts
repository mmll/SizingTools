import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './_components/app.component';
import {ClarityModule, ClrFormsNextModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SizingFormComponent} from './_components/sizing-form/sizing-form.component';
import {AnalyzeResultComponent} from './_components/analyze-result/analyze-result.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ExportComponent } from './_components/export/export.component';
import { SaveResultDialogComponent } from './_components/save-result-dialog/save-result-dialog.component';
import { HistoryComponent } from './_components/history/history.component';
import { TestingComponent } from './_components/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    SizingFormComponent,
    AnalyzeResultComponent,
    ExportComponent,
    SaveResultDialogComponent,
    HistoryComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
