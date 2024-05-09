import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  reactCopm: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      remoteName: 'mfe4',
      exposedModule: './Third',
    }),
};
