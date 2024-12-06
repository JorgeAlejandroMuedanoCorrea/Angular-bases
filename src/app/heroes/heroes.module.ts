import { NgModule } from "@angular/core";
import { HeroComponent as HeroesComponent } from './hero/hero.component';
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  exports : [
    HeroesComponent,
    ListComponent
  ],
  declarations : [
    HeroesComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]

})

export class HeroesModule{}
