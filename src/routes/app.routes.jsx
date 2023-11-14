import {Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { JogoProjetos } from '../pages/JogoProjetos'
import { Orcamentos } from '../pages/Orcamentos'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jogoprojetos' element={<JogoProjetos/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/orcamentos' element={<Orcamentos/>}/>
        </Routes>
    )
}