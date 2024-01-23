'use client'; // This is a client component 👈🏽

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function HomeView() {
  const router = useRouter()

  useEffect(() => {
    router.push('/trivia')
  }, [])

  return (
    <div>Trivia Master</div>
  );
}
