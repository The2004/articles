let categories = []
$(document).ready(()=>{

    $.getJSON( "https://ok.surf/api/v1/cors/news-feed", function( data ) {
        let mainwrap = $("#mainwrapper")
        console.log(data)
        categories = (Object.keys(data))
        for(let cate of categories){
            let catebutton = document.createElement("a")
            $(catebutton).text(cate)
            catebutton.href = "articles.html?category=" + encodeURIComponent(cate)
            catebutton.target = "_blank"
            $(catebutton).addClass("selectcategory")
            mainwrap.append(catebutton)
        }
    });
})