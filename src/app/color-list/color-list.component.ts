import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent  implements OnInit {

  @Input() colors: string[]=[];
  
  constructor() { }

  ngOnInit() {}

}
