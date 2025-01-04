/*
Adım 1: Kullanıcıdan izlemek istediği filmi girin.

Adım 2: Filmi localStorage'a kaydedin.

Adım 3: Sayfa yenilendiğinde izlenecek filmleri görüntüleyin. 
*/

let movies = [];

if (localStorage.movies) {
    movies = JSON.parse(localStorage.movies);
}

function addMovies(){
    const movieName = prompt("Eklemek istediğiniz filmin adını giriniz. ");

    movies.push({movieName});

    localStorage.movies = JSON.stringify(movies);
}
addMovies();