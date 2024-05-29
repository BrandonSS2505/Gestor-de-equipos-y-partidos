import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedCategory:string;

  constructor(private router: Router) {
    // Por defecto, muestra la categoría de voleibol
    this.selectedCategory = 'voleybol';
  }

  irADetalle(id: string) {
    this.router.navigate(['/details', id]); // Navegar a la ruta details/:id
  }
}
