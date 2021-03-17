import { AboutComponent } from '../AboutModule/about.component';
import { PageNotFoundComponent } from '../AboutModule/pageNotFound.component';
import { SongListComponent } from '../SongModule/songlist.component';
import { PlayListComponent} from '../PlaylistModule/playList.component';
import { RegisterComponent } from '../UserModule/register.component';
import { LoginComponent } from '../UserModule/login.component';

export const MainRoutes = [
    {path: 'About', component: AboutComponent},
    //{path: 'SongList', component: SongListComponent },
    {path: 'SongList', loadChildren: () => import('../SongModule/song.module').then(m => m.SongModule)},
    //loadChildren: () => import('../SongModule/song.module').then(m => m.SongModule)},
    {path: 'playList', loadChildren: () => import('../PlaylistModule/playlist.module').then(m => m.PlayListModule)},
   // {path: 'playList', component: PlayListComponent},
   {path: 'Register', component: RegisterComponent},
   {path:'Login', component: LoginComponent},
    {path: '', redirectTo: '/About', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
]

