// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()



let newsData = JSON.parse(localStorage.getItem("newsData"))

console.log(newsData)


import {searchNews, appendData} from "../components/fetch.js"


let container = document.getElementById("results")
            container.innerHTML = null ;
appendData(newsData,container)





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






