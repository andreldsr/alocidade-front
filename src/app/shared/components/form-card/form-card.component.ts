import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ol-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  @Input() title = 'Form Title';
  @Input() subtitle: string;

  @Input() tamanhoCard = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
