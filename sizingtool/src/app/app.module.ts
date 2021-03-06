import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './_components/app.component';
import {ClarityModule, ClrFormsNextModule} from '@clr/angular';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SizingFormComponent} from './_components/sizing-form/sizing-form.component';
import {AnalyzeResultComponent} from './_components/analyze-result/analyze-result.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ExportComponent} from './_components/export/export.component';
import {SaveResultDialogComponent} from './_components/save-result-dialog/save-result-dialog.component';
import {HistoryComponent} from './_components/history/history.component';
import { LoadingComponent } from './_components/loading/loading.component';
import {LoadingService} from './_service/loading.service';
import {CalculateService} from './_service/calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    SizingFormComponent,
    AnalyzeResultComponent,
    ExportComponent,
    SaveResultDialogComponent,
    HistoryComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoadingService,
    CalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
