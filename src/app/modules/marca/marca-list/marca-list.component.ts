import { DeleteDialogComponent } from './../../../shared/components/delete-dialog/delete-dialog.component';
import { MarcaService } from './../marca.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Marca } from 'src/app/model/marca';
import { Page } from 'src/app/model/Page';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.scss']
})
export class MarcaListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marcaService: MarcaService,
    private dialog: MatDialog) { }

  marcaList: Page<Marca>;

  ngOnInit(): void {
    this.route.data.subscribe(
      data => this.marcaList = data.marcaList
    );
  }

  editar(marcaId: number): void {
    this.router.navigate(['marca', 'editar', marcaId]);
  }

  abreDialogExcluir(marca: Marca) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '60%',
      position: { top: '7%' },
      data: { message: `Deseja excluir a marca ${marca.nome}?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(marca);
      }
    });
  }

  private excluir(marca: Marca) {
    this.marcaService.delete(marca)
      .pipe(switchMap(res => this.marcaService.getAll()))
      .subscribe(marcaList => this.marcaList = marcaList);
  }

  onClickCadastrar(): void {
    this.router.navigate(['marca', 'cadastrar']);
  }

  carregaPagina(pageEvent: PageEvent){
    console.log(pageEvent);
    this.marcaService.getPage(pageEvent)
       .subscribe(marcaList => this.marcaList = marcaList);
  }
}
