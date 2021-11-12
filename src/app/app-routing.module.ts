import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainpage'},
  { path: 'mainpage', pathMatch: 'full', component: MainpageComponent},
  { path: 'characters', pathMatch: 'full', component: CharactersComponent },
  { path: 'characters/:id', pathMatch: 'full', component: CharacterDetailComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
