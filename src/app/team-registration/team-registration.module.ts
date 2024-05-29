import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { TeamRegistrationComponent } from './team-registration.component';  // Asegúrate de importar tu componente

@NgModule({
  declarations: [TeamRegistrationComponent],  // Declara tu componente
  imports: [
    CommonModule,
    FormsModule  // Asegúrate de incluir FormsModule aquí
  ],
  exports: [TeamRegistrationComponent]  // Asegúrate de exportar tu componente si lo necesitas en otros módulos
})
export class TeamRegistrationModule { }
