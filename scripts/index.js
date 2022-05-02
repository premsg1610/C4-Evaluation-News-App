// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()


import {sidebar} from "../components/sidebar.js"

document.getElementById("sidebar").innerHTML = sidebar()


import {searchNews, appendData} from "../components/fetch.js"
// console.log(searchNews)

let search = (e) => {

    if(e.key == "Enter")
    {
        let query = document.getElementById("search_input").value
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
        
        searchNews(url).then((data) => {

            console.log(data)
            localStorage.setItem("newsData",JSON.stringify(data))
            window.location.href = "search.html"
            // let container = document.getElementById("results")
            // container.innerHTML = null ;
            // appendData(data,container)
        })
    }
}



document.getElementById("search_input").addEventListener("keydown",search)





// showing news from sidebar

let country = document.getElementById("sidebar").children
console.log(country)


function showNews(){

    console.log(this.id)

    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`

    searchNews(url).then((data) => {

        let container = document.getElementById("results")
        container.innerHTML = null ;
        appendData(data,container)
    })
}




for(let el of country)
{
    // console.log(el.id)
    el.addEventListener("click",showNews)
}




// default news 


let show = () => {

let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in}`

searchNews(url).then((data) => {
      let container = document.getElementById("results")
    container.innerHTML = null ;
    appendData(data,container)
})
}

show()