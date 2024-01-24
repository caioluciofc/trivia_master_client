import { useEffect, useState } from 'react';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { styles } from './avatar.style';
import { useAppContext } from '@/src/app.provider';

export function ScoreBoard() {
  const { gameState } = useAppContext()

  const { rive, RiveComponent } = useRive({
    src: '/score_board.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  
  if (gameState.players && rive) {
    rive.setTextRunValue('Player1', gameState.players[0])
    rive.setTextRunValue('Player2', gameState.players[1])
    if (gameState.score) {
      rive.setTextRunValue('Player1Score', gameState.score[gameState.players[0]].toString())
      rive.setTextRunValue('Player2Score', gameState.score[gameState.players[1]].toString())
    }
  }

  return (
    <div style={styles.main}>
      <RiveComponent style={styles.avatar} />
    </div>
  );
}
