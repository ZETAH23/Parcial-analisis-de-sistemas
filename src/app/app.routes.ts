import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TareasComponent } from './tareas/tareas.component';

export const routes: Routes = [
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'tareas', component:TareasComponent},
];
