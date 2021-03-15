import { PlayListComponent } from '../PlaylistModule/playList.component';
import { AddPlaylistComponent } from '../PlaylistModule/addPlaylist.component';

export const playlistRoutes = [
    {path: '', component: PlayListComponent},
    {path: 'addPlaylist', component: AddPlaylistComponent}
]