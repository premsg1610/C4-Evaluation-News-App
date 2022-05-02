

let searchNews = async (url) => {

    try{
        let res = await fetch(url)

        let data = await res.json()

        console.log(data)

        return data;
    }
    catch(err){
        console.log("err:",err)
    }
}




let appendData = (data,container) => {

    let {articles} = data;

    articles.forEach(({title,description,urlToImage}) =>{

        let box = document.createElement("div")
        box.setAttribute("class","news")

        let img_box =  document.createElement("div")
        img_box.setAttribute("id","img_box")

        let details = document.createElement("div")
        details.setAttribute("id","details")
        

        let img = document.createElement("img")
        img.src = urlToImage

        let titles = document.createElement("h3")
        titles.innerText = title

        let descriptions = document.createElement("p")
        descriptions.innerText = description

        img_box.append(img)

        details.append(titles,descriptions)

        box.append(img_box,details)

        container.append(box)

    })
}


export {searchNews,appendData}