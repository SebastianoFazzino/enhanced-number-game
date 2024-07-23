import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {GameRound} from "../models/game-round";
import {GameResult} from "../models/game-result";
import {PotentialWinResponse} from "../models/potential-win-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  playRound(gameRound: GameRound): Observable<GameResult> {
    const url : string = environment.baseUrl + "/play-round";
    return this.http.post<GameResult>(url, gameRound);
  }

  calculatePotentialWin(gameRound: GameRound): Observable<PotentialWinResponse> {
    const url : string = environment.baseUrl +
      "/calculate-potential-win";
    return this.http.post<PotentialWinResponse>(url, gameRound);
  }

}
