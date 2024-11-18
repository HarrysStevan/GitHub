import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

interface SimCard {
  id: number;
  iccid: string;
  operador: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  simCards: SimCard[] = [];
  userRole: string = '';
  selectedSim: SimCard | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.userRole = this.apiService.obtenerRolUsuario(); // Obtener el rol del usuario almacenado en el servicio
    this.loadSimCards();
  }

  ionViewWillEnter() {
    this.loadSimCards(); // Recargar la lista cada vez que se entra a la vista del Dashboard
  }

  loadSimCards() {
    console.log('Llamando a getSimCards');
    this.apiService.getSimCards().subscribe(
      (data: SimCard[]) => {
        console.log('Datos recibidos de SIM cards:', data); // Verificar datos recibidos
        this.simCards = data && data.length ? data : []; // Si no hay datos, asigna un array vacío
      },
      (error) => {
        console.error('Error al cargar las SIM cards:', error);
        alert('Error al cargar las SIM cards');
      }
    );
  }

  goToAddSimCard() {
    if (this.userRole === 'admin') {
      this.router.navigateByUrl('/add-simcard');
    }
  }

  selectSimCard(sim: SimCard) {
    this.selectedSim = sim;
  }

  editSimCard() {
    if (this.userRole === 'admin' && this.selectedSim) {
      this.router.navigate(['/edit-simcard', this.selectedSim.id]);
    }
  }

  deleteSimCard() {
    if (
      this.userRole === 'admin' &&
      this.selectedSim &&
      confirm('¿Estás seguro de que deseas eliminar esta SIM card?')
    ) {
      this.apiService.deleteSimCard(this.selectedSim.id).subscribe(
        (response) => {
          if (response.success) {
            console.log('SIM card eliminada correctamente');
            this.loadSimCards(); // Recargar la lista después de eliminar
            this.selectedSim = null; // Desmarcar la SIM seleccionada
          } else {
            alert('Error al eliminar la SIM card');
          }
        },
        (error) => {
          console.error('Error al eliminar la SIM card:', error);
          alert('Error al eliminar la SIM card');
        }
      );
    }
  }

  logout() {
    this.apiService.logout();
    this.router.navigateByUrl('/login');
  }
}
