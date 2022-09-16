import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subítulo"></ComParametro>
        <ComParametro titulo="Opa" subtitulo="Epa"></ComParametro>
    </div>,
    document.getElementById('root')
)
