package com.numbergame.controllers;

import com.numbergame.models.GameResult;
import com.numbergame.models.GameRound;
import com.numbergame.models.PotentialWinResponse;
import com.numbergame.services.GameService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping({"/v1/number-game"})
public class GameController {

    private final GameService gameService;

    @PostMapping("/play-round")
    public GameResult playRound(
            @Valid @RequestBody GameRound gameRound
    ) {

        log.info("Playing round with selected number: {} and placed bet: {}",
                gameRound.getSelectedNumber(), gameRound.getPlacedBet());

        return gameService.computeResult(gameRound);
    }

    @PostMapping("/calculate-potential-win")
    public PotentialWinResponse calculatePotentialWin(
            @Valid @RequestBody GameRound gameRound
    ) {

        log.info("Calculating potential win for selected number: {} and placed bet: {}",
                gameRound.getSelectedNumber(), gameRound.getPlacedBet());

        return new PotentialWinResponse(gameService.calculatePotentialWin(
                gameRound.getSelectedNumber(), gameRound.getPlacedBet()));
    }
}
