import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './Model user/list-user.component';


const routes: Routes = [
  {path:'users', component : ListUserComponent},
  // {path:'reactiveform', component : ReactiveformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
