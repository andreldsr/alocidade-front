import { EventDetailDTO } from 'src/app/model/event';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  title = 'Cadastrar';
  subtitle = 'Cadastrar novo evento no sistema';

  form: FormGroup;
  event: EventDetailDTO;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private router: Router,
    private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (info: { event: EventDetailDTO }) => this.event = info.event
    );
    if (this.event.id != null) {
      this.title = 'Atualizar';
      this.subtitle = 'Atualizar os dados de um evento no sistema';
    }
    this.form = this.formBuilder.group({
      id: [this.event.id],
      title: [this.event.title, Validators.required],
      description: [this.event.description, Validators.required],
      video: [this.event.video],
      date: [this.datepipe.transform(this.event.date, "yyyy-MM-dd'T'HH:mm"), Validators.required],
    });
  }

  cadastrar() {
    this.event = this.form.getRawValue() as EventDetailDTO;

    this.eventService.save(this.event)
      .subscribe(
        m => this.retornaLista(),
        err => console.log(err)
      );
  }

  retornaLista() {
    this.router.navigate(['event']);
  }

}
