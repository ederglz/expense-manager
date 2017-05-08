import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './components/expense-list'

let empleados = [  
  { id: 1, fullName: "Metro", title: "Transporte Público", department: "$200", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Metro_de_la_Ciudad_de_M%C3%A9xico_logo.svg/2000px-Metro_de_la_Ciudad_de_M%C3%A9xico_logo.svg.png" },
  { id: 2, fullName: "Desayuno", title: "Alimento", department: "$600", pic: "https://svn.openstreetmap.org/applications/share/map-icons/svg-twotone/food/fastfood.svg" },
  { id: 3, fullName: "Comida", title: "Alimento", department: "$2000", pic: "https://svn.openstreetmap.org/applications/share/map-icons/svg-twotone/food/fastfood.svg" },
  { id: 4, fullName: "Spotify", title: "Entretenimiento", department: "$99", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png" }
]
ReactDOM.render(<ExpenseList listado={empleados}/>, document.getElementById('application'));