import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  monsterData = []; 
  
  hero: any = {
    name: '',
    power: null
  };


  constructor() { }

  ngOnInit() {
  }
  generateHeroPower() {
    this.hero.power = Math.floor(Math.random() * 1000);
    // console.log(this.hero.power);
   }
}
