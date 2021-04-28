import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shrd-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  _isHidden = true;
  @Input() basePath: string = '';

  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    console.log(this._isHidden);
    this._isHidden = !this._isHidden;
  }
}
