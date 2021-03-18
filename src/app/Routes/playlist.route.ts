import { PlayListComponent } from '../PlaylistModule/playList.component';
import { AddPlaylistComponent } from '../PlaylistModule/addPlaylist.component';
import { AuthGuardConfirmation } from '../formAuth.confirm';

export const playlistRoutes = [
    {path: '', component: PlayListComponent},
    {path: 'addPlaylist', component: AddPlaylistComponent}
]