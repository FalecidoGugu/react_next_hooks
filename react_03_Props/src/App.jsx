import React from 'react';
import Article from './components/Article';
export default function App() {

let artigos = [
    { id: 1, titulo: "Um", subtitulo: "sub Um"},
    { id: 2, titulo: "Dois", subtitulo: "sub dois"},
    { id: 3,titulo:"Tres", subtitulo: "sub tres"},
    { id: 4, titulo: "quatro", subtitulo: "sub quatro"},
    { id: 5,titulo:"cinco", subtitulo: "sub cinco"},
    { id: 6,titulo:"seis", subtitulo: "sub seis"},
    { id: 7, titulo: "sete", subtitulo: "sub sete"}
]

let conteudo = artigos.map(art => <Article key={art.id} titulo={art.titulo} subtitulo={art.subtitulo} />);

    return (
        <>
            <h3>App</h3>
            {conteudo}
        </>
    )
}