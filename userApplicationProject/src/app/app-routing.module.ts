import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrouteComponent } from './addroute/addroute.component';
import { DeleterouteComponent } from './deleteroute/deleteroute.component';
import { HomerouteComponent } from './homeroute/homeroute.component';
import { UpdaterouteComponent } from './updateroute/updateroute.component';

const routes: Routes = [
  {'path':'addroute',component:AddrouteComponent},
  {'path':'homeroute',component:HomerouteComponent},
  {'path':'updateroute',component:UpdaterouteComponent},
  {'path':'deleteroute',component:DeleterouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
