let active = document.getElementById('active-ele');
let items = document.getElementById('items');
const xhr = new XMLHttpRequest();
let newsObj;

// using xhr object
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=98ddebbb3c944530923544e7fd58e550', false);
xhr.onload = function () {
    newsObj = JSON.parse(this.responseText);
}
xhr.send();
showNews(newsObj);


// Using fetch api
// function fetchAPI(){
//     url="https://newsapi.org/v2/top-headlines?country=in&apiKey=98ddebbb3c944530923544e7fd58e550";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         showNews(data);
//     }).catch((err)=>{
//         console.log(err);
//     });
// }
// fetchAPI();

function showNews(newsObj){
    let html = `<div class="carousel-item active" id="active-ele">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">${newsObj.articles[0].title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${newsObj.articles[0].author}</h6>
        <img src="${newsObj.articles[0].urlToImage}" alt="img"  class="my-2">
        <p class="card-text">${newsObj.articles[0].description}</p>
        <a href="${newsObj.articles[0].url}" class="card-link">More..</a>
    </div>
    </div>
    </div>`
    for (let i = 1; i < newsObj.articles.length; i++) {
        html += `<div class="carousel-item">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${newsObj.articles[i].title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${newsObj.articles[i].author}</h6>
            <img src="${newsObj.articles[i].urlToImage}" alt="img" class="my-2">
            <p class="card-text">${newsObj.articles[i].description}</p>
            <a href="${newsObj.articles[i].url}" class="card-link">More..</a>
        </div>
        </div>
        </div>`
    }
    items.innerHTML = html;
}

function showArticles(newArticles){
    let html;
    if(newArticles.length==0){
        html="";
    }
    else{
        html = `<div class="carousel-item active" id="active-ele">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${newArticles[0].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${newArticles[0].author}</h6>
            <img src="${newArticles[0].urlToImage}" alt="img"  class="my-2">
            <p class="card-text">${newArticles[0].description}</p>
            <a href="${newArticles[0].url}" class="card-link">More..</a>
        </div>
        </div>
        </div>`
        for (let i = 1; i < newArticles.length; i++) {
            html += `<div class="carousel-item">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${newArticles[i].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${newArticles[i].author}</h6>
                <img src="${newArticles[i].urlToImage}" alt="img" class="my-2">
                <p class="card-text">${newArticles[i].description}</p>
                <a href="${newArticles[i].url}" class="card-link">More..</a>
            </div>
            </div>
            </div>`
        }
    }         
    items.innerHTML = html;
}

let search = document.getElementById('search');
search.addEventListener('input', () => {
    let k = 0;
    let val = search.value;
    let newArticles=[];
    let html="";
    for (let i = 0; i < newsObj.articles.length; i++) {
        if ((newsObj.articles[i].title).includes(val)) {
            newArticles.push(newsObj.articles[i]);
        }
    }
    showArticles(newArticles);
})