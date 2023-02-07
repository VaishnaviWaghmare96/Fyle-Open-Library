import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

interface Books {
  title : String,
  author : string,
  publish_latest : string,
  publish_first : string
}

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
