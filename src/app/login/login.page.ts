import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService
  ) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async login() {
    try {
      // Appel de la méthode login du service d'authentification
      await this.authService.login({
        username: this.username,
        password: this.password
      });

      // Si la connexion est réussie, fermez le modal
      console.log('Connexion réussie pour l\'utilisateur:', this.username);
      await this.dismiss();
    } catch (error) {
      // Gestion des erreurs de connexion
      console.error('Erreur lors de la connexion:', error);
      if (typeof error === 'string') {
        this.loginError = error; // Enregistrement du message d'erreur si c'est une chaîne de caractères
      } else {
        this.loginError = 'Une erreur inattendue s\'est produite lors de la connexion.'; // Message par défaut
      }
    }
  }

}
