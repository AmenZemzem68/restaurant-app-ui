import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  fullName: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  registrationError: string = '';

  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService
  ) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async register() {
    try {
      // Vérification de la correspondance des mots de passe
      if (this.password !== this.confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas.');
      }
  
      // Appel de la méthode register du service d'authentification
      await this.authService.register({
        fullName: this.fullName,
        username: this.username,
        password: this.password
      });
  
      // Si l'inscription est réussie, fermez le modal
      console.log('Utilisateur enregistré avec succès.');
      console.log('Full Name:', this.fullName);
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Confirm Password:', this.confirmPassword);
      await this.dismiss();
    } catch (error) {
      // Gestion des erreurs d'inscription
      console.error('Erreur lors de l\'inscription:', error);
      if (typeof error === 'string') {
        this.registrationError = error; // Enregistrement du message d'erreur si c'est une chaîne de caractères
      } else {
        this.registrationError = 'Une erreur inattendue s\'est produite lors de l\'inscription.'; // Message par défaut
      }
    }
  }
  
}
