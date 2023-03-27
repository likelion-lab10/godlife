import { getAuth } from 'firebase/auth';
import { app } from '../../fbase';

export const auth = getAuth(app);
auth.useDeviceLanguage();

export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';
