import { ReactElement } from 'react'
import { TextInputProps } from 'react-native'

import { Control } from 'react-hook-form';
import { IInputControl } from '../MaterialTextInput/types';

interface InputField extends TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  trigger?: string;
  blurTrigger?: string;
  valuePropName?: string;
  component?: (a: IInputControl) => ReactElement;
}

export type InputFieldType = InputField;