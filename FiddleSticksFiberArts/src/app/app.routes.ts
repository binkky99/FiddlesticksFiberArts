import { Routes } from '@angular/router';

function isDesktop(): boolean {
  if (typeof window !== "undefined") {
    return window.innerWidth > 768;
  } else return true;
 }

export const routes: Routes = [
  {
    path: '', loadComponent: () => {
        if(isDesktop()) return import('./features/desktop/desktop.component').then(mod => mod.DesktopComponent);
        return import('./features/mobile/mobile.component').then(mod => mod.MobileComponent);
    }
  }
];