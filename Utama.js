import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import Tentangsaya from './Tentangsaya';
import Karya from './Karya';

const Utama = () => (
    <switch> 
        <Route exact path="/" component={Beranda} />
        <Route path="/Tentangsaya" component={Tentangsaya} />
        <Route path="/Karya" component={Karya} />
    </switch>
)

export default Utama;