import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Marca } from 'src/app/model/marca';
import { MarcaService } from './../marca.service';

@Component({
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.scss']
})
export class MarcaFormComponent implements OnInit {

  title = 'Cadastrar';
  subtitle = 'Cadastrar nova marca no sistema';

  form: FormGroup;
  marca: Marca;
  constructor(
    private route: ActivatedRoute,
    private marcaService: MarcaService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (info: { marca: Marca }) => this.marca = info.marca
    );
    if (this.marca.id != null) {
      this.title = 'Atualizar';
      this.subtitle = 'Atualizar os dados de uma marca no sistema';
    }
    this.form = this.formBuilder.group({
      id: [this.marca.id],
      nome: [this.marca.nome, Validators.required]
    });
  }

  cadastrar() {
    this.marca = this.form.getRawValue() as Marca;

    this.marcaService.save(this.marca)
      .subscribe(
        m => this.retornaLista(),
        err => console.log(err)
      );

  }

  retornaLista() {
    this.router.navigate(['marca']);
  }

}
