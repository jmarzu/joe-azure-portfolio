import { animate, query, style, transition, trigger } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('* => *', [
    query(':leave', style({ position: 'absolute', left: '3rem', height: '100%', right: '3rem', opacity: 1 }), { optional: true }),
    query(':enter', style({ position: 'absolute', left: '3rem', height: '100%',right: '3rem', opacity: 0 }), { optional: true }),
    query(':leave', animate('.5s', style({ opacity: 0 })), { optional: true }),
    query(':enter', animate('.5s', style({ opacity: 1 })), { optional: true })
  ])
]);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'home'} },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { animationState: 'about'}
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule),
    data: { animationState: 'skills'}
  },
  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then(m => m.WorkModule),
    data: { animationState: 'work'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: { animationState: 'contact'}
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
