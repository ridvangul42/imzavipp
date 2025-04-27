const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const anasayfaBtn = document.querySelector("#anasayfa-btn");


searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searcItem)
        ) {
            
                searchForm.classList.remove("active");
        }
    })
})


anasayfaBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(anasayfaBtn) &&
            !e.composedPath().includes(navbar)
        ) {
            
             navbar.classList.remove("active");
        }
    })
})
