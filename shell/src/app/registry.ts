import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  mfe1: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      exposedModule: './web-components',
    }),
  mfe4: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      remoteName: 'mfe4',
      exposedModule: './web-components',
    }),
  reactCopm: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      remoteName: 'mfe4',
      exposedModule: './Third',
    }),
  mfe5: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8083/remoteEntry.js',
      exposedModule: './web-components',
    }),
  mfe6: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
    }),
  mfe8: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './web-components',
    }),
};
