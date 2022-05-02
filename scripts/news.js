// Ude Import export (MANDATORY)



import {navbar} from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()


import {searchNews, appendData} from "../components/fetch.js"


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



