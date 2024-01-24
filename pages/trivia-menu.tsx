'use client'; // This is a client component 👈🏽

import React, { useEffect } from 'react';
import { TitleLarge } from '@/design_system';
import { styles } from '../design_system/styles/trivia.style';
import Link from 'next/link';
import { Avatar } from '@/components';
import { OldMan } from '@/components';
import { useAppContext } from '@/src/app.provider';
import TriviaAuth from './authentication';

export default function TriviaMenu() {
  const { authState, socketState, setOldManText } = useAppContext();

  useEffect(() => {
    if (authState.authToken) {
      setOldManText(`${authState.userName}! Good to have you here! Let's Trivia!`)
    }
  }, [authState.authToken])

  return (
    <main style={styles.main}>
      {!authState.authToken && <TriviaAuth />}
      {authState.authToken && (
        <div style={styles.menu}>
          <div style={styles.header}>
            <TitleLarge text="Trivia" />
          </div>

          <OldMan />

          <Link
            style={styles.button}
            href={{
              pathname: '/join',
            }}>
            Play
          </Link>
          <Link
            style={styles.button}
            href={{
              pathname: '/games',
            }}>
            Ranking
          </Link>
        </div>
      )}
    </main>
  );
}
