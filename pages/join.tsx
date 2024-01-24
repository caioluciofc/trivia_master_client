'use client'; // This is a client component 👈🏽

import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { PrimaryButton, TextButton, TextField, TitleLarge } from '@/design_system';
import { styles } from '../design_system/styles/join.style';
import { useRouter } from 'next/router';
import { useAppContext } from '@/src/app.provider';
import { JumpingQuestion } from '@/components';
import { OldMan } from '@/components';

export default function JoinGame() {
  const { authState, socketState, enterQueue, gameState, setOldManText } = useAppContext();

  useEffect(() => {
    if (!gameState.roomId) {
      enterQueue(authState.userName ?? "");
    }
    setOldManText("Great! Let's find a player for you to play with!")
  }, []);

  useEffect(() => {
    if (gameState.gameOn && gameState.players?.length === 2) {
      console.log(gameState)
      router.push('/game-screen');
    }
  }, [gameState.gameOn, gameState.players]);

  const router = useRouter();

  return (
    <main style={styles.main}>
      <div style={styles.container}>
          <OldMan />
      </div>
    </main>
  );
}
