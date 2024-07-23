import {Component} from '@angular/core';
import {GameRound} from "../../models/game-round";
import {GameResult} from "../../models/game-result";
import {ApiService} from "../../services/api.service";
import {delay} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {faCircleRight, faCoins, faQuestionCircle, faSackDollar} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    FormsModule,
    FaIconComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  protected gameRound: GameRound = {
    selectedNumber: null,
    placedBet: null
  }

  protected gameResult: GameResult = {};
  protected potentialWin: number = 0;

  protected isRequestExecuting: boolean = false;
  protected errorMessages: string[] = [];

  protected faQuestionCircle: IconDefinition = faQuestionCircle;
  protected faCoins: IconDefinition = faCoins;
  protected faSackDollar: IconDefinition = faSackDollar;
  protected faCircleRight: IconDefinition = faCircleRight;

  constructor(
    private apiService: ApiService
  ) {}

  clearErrors(): void {
    this.errorMessages = [];
  }

  playRound() : void {

    this.clearErrors();

    // Check if selectedNumber is a number
    if ( this.gameRound.selectedNumber && isNaN(this.gameRound.selectedNumber) ) {
      this.errorMessages.push('Selected number must be a valid number in the range 1-100');
    }

    // Check if placedBet is a number
    if ( this.gameRound.placedBet && isNaN(this.gameRound.placedBet) ) {
      this.errorMessages.push('Placed bet must be a valid amount greater than 0');
    }

    if ( this.errorMessages.length > 0 ) {
      return;
    }

    this.isRequestExecuting = true; // Set loading state to true

    this.apiService.playRound(this.gameRound)
      .pipe(delay(2000)) // Simulate game round delay
      .subscribe({

        next: (gameResult: GameResult) => {
          this.gameResult = gameResult;
          this.isRequestExecuting = false;
        },

        error: (err: HttpErrorResponse): void => {
          this.isRequestExecuting = false;
          this.errorMessages = [];

          // Check if the error is due to network issues
          if (err.error instanceof ErrorEvent) {
            this.errorMessages.push("A network error occurred. Please try again later.");
          } else {
            // Server or connection error happened
            if (err.status === 0) {
              this.errorMessages.push("Could not connect to the server.Please try again later.");
            } else {
              // Handle HTTP errors
              if (err.error && typeof err.error === 'object') {
                // Handle validation errors
                if (err.error.validationErrors) {
                  this.errorMessages = err.error.validationErrors;
                } else if (err.error.message) {
                  // Specific error message from server
                  this.errorMessages.push(err.error.message);
                } else {
                  // Generic error message for other cases
                  this.errorMessages.push("An error occurred. Please try again later.");
                }
              } else {
                // Fallback error message
                this.errorMessages.push("An unexpected error occurred. Please try again later.");
              }
            }
          }
        }
      })
  }

  protected checkAndCalculatePotentialWin(): void {
    this.clearErrors();
    if (this.gameRound.selectedNumber !== null && this.gameRound.placedBet !== null) {
      this.calculatePotentialWin();
    }
  }

  calculatePotentialWin(): void {
    this.potentialWin = 100;
  }
}
