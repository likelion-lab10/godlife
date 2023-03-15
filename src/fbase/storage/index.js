import { app } from '../../fbase';
import { getStorage } from 'firebase/storage';

export const storage = getStorage(app);

export * from './useUploadFile';
export * from './useDownloadURL';
export * from './useDeleteFile';
