import { Routes } from '@angular/router';
import {CreateTechComponent} from "./components/create-tech/create-tech.component";


export const routes: Routes = [
//  { path: "", pathMatch: "full", loadComponent: () => import("./pages/home/home.component").then(p => p.HomeComponent) },

  { path: "new", component: CreateTechComponent }
];
