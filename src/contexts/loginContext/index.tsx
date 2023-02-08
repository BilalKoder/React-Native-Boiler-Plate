import { createContext } from 'react';
import { LoginContext } from './types';

export default createContext<LoginContext | null>(null); 