import { SongListComponent } from '../SongModule/songlist.component';
import { AddSongComponent } from '../SongModule/addSong.component';
export const songRoutes = [
    {path: '', component: SongListComponent},
    {path: 'addSong', component: AddSongComponent}
]