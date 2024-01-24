'use client'; // This is a client component 👈🏽

import React, { useEffect } from 'react';
import { Colors, IconCrossMark, PrimaryButton, TitleLarge } from '@/design_system';
import { styles } from '../design_system/styles/join.style';
import { useRouter } from 'next/router';
import { useAppContext } from '@/src/app.provider';
import { OldMan } from '@/components';
import { ScoreBoard } from '@/components';

export default function TriviaGame() {
  const router = useRouter();
  const {
    gameState,
    socketState,
    answerQuestion,
    authState,
    clearGame,
    clearSocketGame,
    setOldManText,
  } = useAppContext();

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function _answerQuestion(answer: string) {
    if (socketState.socket) {
      answerQuestion(socketState.socket, answer, authState.userName ?? '');
    }
  }

  useEffect(() => {
    if (gameState.gameResult) {
      const resultTexts = {
        'draw' : 'The game was a draw, not good but not bad.',
        'win'  : 'CONGRATULATIONS, YOU ARE THE WINNER!',
        'lost' : 'Bad, bad player, you lost!'
      }
      setOldManText(resultTexts[gameState.gameResult]);
      setTimeout(() => {
        clearGame();
        clearSocketGame();
        router.push('/trivia-menu');
      }, 3000);
    }
  }, [gameState.gameResult]);

  useEffect(() => {
      setOldManText(gameState.question ?? '');
  }, [gameState.question]);

  return (
    <main style={styles.main}>
      <div style={styles.container}>
          <OldMan />
          <div style={styles.container}>
          {!gameState.waitingNextQuestion && !gameState.gameResult && (
              <div>
                {gameState.answers &&
                  shuffleArray(gameState.answers).map((answer) => {
                    return (
                      <PrimaryButton
                        text={answer}
                        key={answer}
                        isLoading={false}
                        onClick={() => _answerQuestion(answer)}
                      />
                    );
                  })}
              </div>
          )}
          </div>
          <ScoreBoard />
        </div>
    </main>
  );
}
