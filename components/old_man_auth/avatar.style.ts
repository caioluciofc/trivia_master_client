'use client'; // This is a client component 👈🏽

import { Colors, FontSizes, Paddings } from '@/design_system';
import { CustomStyle } from '@/src/models';

export const styles: CustomStyle = {
  main: {
    width: '100%',
    height: 400,
    borderRadius: 80,
    border: '2px solid',
    borderColor: Colors.white,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '130%',
    borderRadius: 80,
  },
};
