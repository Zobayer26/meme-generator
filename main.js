const memeBtn =document.querySelector('.memeButton');
const memetitle=document.querySelector('.title');
const img=document.querySelector('.memeImg');
const memeauthor=document.querySelector('.memeauthor');

const upDateMeme=(url,title,author)=>{
    img.setAttribute("src",url);
    memetitle.innerHTML=title;
    memeauthor.innerHTML=`Meme by ${author}`;
}

const memeGenerator=()=>{
    fetch("https://meme-api.com/gimme").then(
        (response)=>response.json()).then((data)=>{
            upDateMeme(data.url,data.title,data.author);
        });
};
memeBtn.addEventListener("click",memeGenerator);
memeGenerator();