import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public persona: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ingresar() {
    if (!this.persona.email || !this.persona.password)
      return alert('Completar datos faltantes');
    this.router.navigate(['/result']);
  }
}
