/*
Adım 1: Kullanıcıdan izlemek istediği filmi girin.

Adım 2: Filmi localStorage'a kaydedin.

Adım 3: Sayfa yenilendiğinde izlenecek filmleri görüntüleyin. 
*/

function isAccepted(msg, ...keys){
    const value = prompt(msg);

    if (keys.includes(value)) {
        return value;
    }else{
        alert("Hatalı tuşlama");
        return isAccepted();
    }
}

function nextAction(){
    const value = isAccepted("Başka bir işlem yapmak ister misiniz ? (e/h)","e","h","E","H");
    if (value.toLowerCase() === "e") {
        return mainMenu();
    }else{
        alert("Bye bye");
        return;
    }
}

function mainMenu(){
    const value = isAccepted("1- Film Ekle. \n 2- Filmleri Göster. \n 3- Çık","1","2","3");

    if (value == 1) {
        return addMovies();
    }else if (value == 2) {
        return listMovies();
    }else if(value == 3){
        alert("Bye");
        return;
    }else{
        alert("Hatalı tuşlama yaptınız.");
        return mainMenu();
    }
}

let movies = [];

if (localStorage.movies) {
    movies = JSON.parse(localStorage.movies);
}


function addMovies(){
    const movieName = prompt("Eklemek istediğiniz filmin adını giriniz. ");
    
    movies.push({movieName});
    
    localStorage.movies = JSON.stringify(movies);

    return nextAction();
}

function listMovies(){
    const moviesList = movies.map(movie => `${movie.movieName}`).join("\n");

    alert(moviesList);

    return nextAction();
}

mainMenu();