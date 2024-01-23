import useAuthState from './states/authentication.state';
import useWebsocketsState from './states/websockets.state';
import useGameState from './states/game.state';
import { useOldManState } from './states/old-man.state';

type AuthActions = ReturnType<typeof useAuthState>[1];
type SocketActions = ReturnType<typeof useWebsocketsState>[1];
type GameActions = ReturnType<typeof useGameState>[1];
type OldManActions = ReturnType<typeof useOldManState>[1];

export interface AppProviderType extends AuthActions, SocketActions, GameActions, OldManActions {
  authState: ReturnType<typeof useAuthState>[0];
  socketState: ReturnType<typeof useWebsocketsState>[0];
  gameState: ReturnType<typeof useGameState>[0];
  oldManState: ReturnType<typeof useOldManState>[0];
}
