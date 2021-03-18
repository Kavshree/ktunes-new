import { SongListComponent } from '../SongModule/songlist.component';
import { AddSongComponent } from '../SongModule/addSong.component';
import { EditSongComponent } from '../SongModule/editSong.component';
import { AuthGuardConfirmation } from '../formAuth.confirm';
import { UserAuth } from '../userAuth.auth'

export const songRoutes = [
    {path: '', component: SongListComponent},
    {path: 'addSong', component: AddSongComponent, canDeactivate: [AuthGuardConfirmation], canActivate: [UserAuth]},
    {path: 'editSong/:id', component: EditSongComponent }
]