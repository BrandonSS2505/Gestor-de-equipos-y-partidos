import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedCategory:string;

  constructor(private router: Router) {
    this.selectedCategory = 'voleybol';
  }

  irTorneos(category: string) {
    this.router.navigate(['/torneos', category]); // Navegar a la ruta details/:id
  }

}
