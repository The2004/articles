let categories = []
function getQuery(que){
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(que)
}
$(document).ready(()=>{
    
    $.getJSON( "https://ok.surf/api/v1/cors/news-feed", function( data ) {
        let mainwrap = $(".articleswrapper")
        const category = getQuery("category")
        console.log(category, data)
        for(let arti of data[category]){ 
            let article = document.createElement("div")
            $(article).addClass("article")
            let title = document.createElement("a")
            $(title).addClass("articlelink")
            title.target = "_about"
            $(title).attr("href", arti.link)
            $(title).text(arti.title)
            let img = document.createElement("img")
            $(img).addClass("articleimg")
            img.src = arti.og
            let imgwrapper = document.createElement("div")
            $(imgwrapper).addClass("imgwrapper")
            imgwrapper.appendChild(img)
            let source = document.createElement("p")
            $(source).addClass("articlesource")
            $(source).text("Source: "+arti.source)
            $(article).append(title)
            $(article).append(source)
            $(article).append(imgwrapper)
            
            mainwrap.append(article)
        }
    });
})