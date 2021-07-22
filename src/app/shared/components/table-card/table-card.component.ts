import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ol-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {

  @Input() title = 'Table';
  @Input() subtitle = '';
  @Input() showCadastrar = false;

  @Output() clickCadastrar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickCadastrar(){
    this.clickCadastrar.emit('true');
  }

}
