import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SizingFormComponent} from './_components/sizing-form/sizing-form.component';
import {AnalyzeResultComponent} from './_components/analyze-result/analyze-result.component';
import {HistoryComponent} from './_components/history/history.component'

const routes: Routes = [
  {
    path: '', component: SizingFormComponent
  },
  {
    path: 'result', component: AnalyzeResultComponent
  },
  {
    path: 'history', component: HistoryComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
