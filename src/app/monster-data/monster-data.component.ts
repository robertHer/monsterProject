import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'monster-data',
  templateUrl: './monster-data.component.html',
  styleUrls: ['./monster-data.component.css']
})
export class MonsterDataComponent implements OnInit {
  hero: any = {
    name: '',
    power: null
  };

  @Output() heroPower = new EventEmitter<number>();

  ngOnInit() {
  }

  generateHeroPower() {
    this.hero.power = Math.floor(Math.random() * 1000);
    // console.log(this.hero.power);
    this.heroPower.emit(this.hero.power);
}
  
}
