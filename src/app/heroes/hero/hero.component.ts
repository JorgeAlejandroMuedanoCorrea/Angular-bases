import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name : string = 'ironMan';
  public age : number = 45;


  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }


  changeHero() : void{
    this.name = 'Spiderman';
  }

  changeEdad(){
    this.age = 16;
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
  }
}
