import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenidos a mi Netflix';

  empleados = [
    {
      nombre: 'Adrian Garcia',
      puesto: 'Angular Dev',
      team: 'Backoffice App'
    },
    {
      nombre: 'Daniel Perez',
      puesto: 'QA',
      team: 'Backoffice App'
    },
    {
      nombre: 'Gustavo Boilch',
      puesto: 'Scrum Master',
      team: ''
    },
  ]


agregarEmpleado (nombre:string){
  this.empleados.push(
    {
      nombre: nombre,
      puesto: '',
      team: '',
    })
}






  peliculas=[
    {
      id: 1,
      title: "The Big Bang Theory",
      actors: ["Kaley Cuoco", "Jim Parsons", "Johnny Galecki"],
      review:
        "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg",
      rating: 10,},
    {
      id: 2,
      title: "Silicon Valley",
      actors: ["Thomas Middleditch", "Kumail Nanjiani", "Zach Woods"],
      review:
        " Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper. ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTcwNzU2MGEtMzUzNC00MzMwLWJhZGItNDY3NDllYjU5YzAyXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
      rating: 8,
    },
    {
      id: 3,
      title: "Mr Robot",
      actors: ["Lee Pace", "Mackenzie Davis", "Kerry Bishé"],
      review:
        "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
      rating: "",
    },
    {
      id: 4,
      title: "Halt and Catch Fire",
      actors: ["Lee Pace", "Mackenzie Davis", "Kerry Bishé"],
      review:
        "In 1983, former IBM sales executive Joe MacMillan joins Cardiff Electric, a Dallas-based mainframe software company. ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTczNjAyMDg1Nl5BMl5BanBnXkFtZTgwMDQyNTA2OTE@._V1_.jpg",
      rating: 6,
    },
    {
      id: 5,
      title: "Dexter",
      actors: ["Michael C. Hall", "Jennifer Carpenter", "David Zayas"],
      review:
        " By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_.jpg",
      rating: "",
    },
  ]

}
