/* Fill your code*/
class Blog{
    constructor(title, detail){
        this.title = title;
        this.detail = detail;
    }
    addTitle(){
        let title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
       
    }
    addDescription(){
        let description_card = document.createElement('p');
        description_card.setAttribute("id","blog-description");
        console.log(description_card);
        document.getElementById('card-text').appendChild(description_card);
        description_card.innerHTML += this.detail;

    }
}
let btn = document.getElementById("addBlog").addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "inherit";
});
let close = document.getElementById("close").addEventListener("click", function(){
    document.getElementById("popupContact").style.display = "none";
});

let post = document.getElementById("post").addEventListener("click",function(){
    let title = document.getElementById("title").value;
    let detail = document.getElementById("detail").value; 

    let blog = new Blog(title, detail);

    blog.addTitle();
    blog.addDescription();
    
    document.getElementById("popupContact").style.diplay = "inherit";
    document.getElementById("image").style.visibility = "visible";
});



