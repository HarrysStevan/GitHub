import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-simcard',
  templateUrl: './edit-simcard.page.html',
})
export class EditSimCardPage implements OnInit {
  sim = { iccid: '', operador: '' };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || ''; // Convierte a cadena vacía si es null
    this.apiService.getSimCardById(id).subscribe(
      (data: any) => {
        if (data && !data.error) {
          this.sim = data;
        } else {
          alert('Error al cargar la SIM card');
        }
      },
      (error: any) => {
        console.error('Error al cargar la SIM card:', error);
        alert('Error al cargar la SIM card');
      }
    );
  }

  updateSimCard() {
    const id = this.route.snapshot.paramMap.get('id') || ''; // Convierte a cadena vacía si es null
    this.apiService.updateSimCard(id, this.sim).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/dashboard/admin']); // Asegura que la redirección al dashboard sea correcta
        } else {
          alert('Error al actualizar la SIM card');
        }
      },
      (error: any) => {
        console.error('Error al actualizar la SIM card:', error);
        alert('Error al actualizar la SIM card');
      }
    );
  }
}
