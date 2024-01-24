import { CustomStyle } from '@/src/models';
import React from 'react';
import { Colors, Paddings } from '..';

interface Props {
  defaultValue: string;
  onChange: (value: string) => void;
  placeHolder:string,
  isDisabled: boolean;
  type: string
}

export function TextField({ defaultValue, isDisabled, placeHolder, onChange, type }: Props) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      disabled={isDisabled}
      style={styles.input}
      placeholder={placeHolder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
  
const styles: CustomStyle = {
  input: {
    padding: Paddings.small,
    margin: Paddings.small,
    width: '95%',
    height: 20,
    backgroundColor: Colors.background + 100,
    border: 'solid 1px ' + (Colors.grey + 60),
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
