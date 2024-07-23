import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {GameRound} from "../models/game-round";
import {GameResult} from "../models/game-result";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  playRound(gameRound: GameRound): Observable<GameResult> {
    const url : string = environment.apiUrl;
    return this.http.post<GameResult>(url, gameRound);
  }

}
