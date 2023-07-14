import { Routes } from "@angular/router";

export const AppRotas: Routes = [

    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'player',
        loadChildren : () => import ('./pages/player/player.module').then(x => x.PlayerModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
        
    }
]