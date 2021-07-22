import { EventListDTO } from 'src/app/model/event';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  eventList: EventListDTO[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => this.eventList = data.eventList
    );
  }

  editar(eventId: number): void {
    this.router.navigate(['event', 'edit', eventId]);
  }

  abreDialogExcluir(event: EventListDTO) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '60%',
      position: { top: '7%' },
      data: { message: `Deseja excluir o evento ${event.title}?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(event);
      }
    });
  }

  private excluir(event: EventListDTO) {
    this.eventService.delete(event)
      .pipe(switchMap(res => this.eventService.getAll()))
      .subscribe(eventList => this.eventList = eventList);
  }

  onClickCadastrar(): void {
    this.router.navigate(['event', 'register']);
  }

}
