import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shrd-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
  @Input() disabled = false;
  @Input() path = '';

  constructor() {}

  ngOnInit(): void {}
}
