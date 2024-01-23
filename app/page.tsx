'use client'; // This is a client component 👈🏽

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function TriviaGame() {
  const router = useRouter()

  return (router.push('/trivia'));
}
