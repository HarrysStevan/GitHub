import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-simcard',
  templateUrl: './add-simcard.page.html',
})
export class AddSimCardPage {
  sim = { iccid: '', operador: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  addSimCard() {
    this.apiService.addSimCard(this.sim).subscribe(
      (response) => {
        if (response.success) {
          this.router.navigate(['/dashboard/admin']);
        } else {
          alert('Error al agregar la SIM card');
        }
      },
      (error) => {
        console.error('Error al guardar la SIM card:', error);
        alert('Error al conectarse con el servidor.');
      }
    );
  }
}
