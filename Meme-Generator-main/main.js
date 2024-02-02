const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-author");
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };

  let arr=["/wholesomememes","/catmeme","/dogmeme","/me_irl",""];
  let api="https://meme-api.com/gimme";

  
  
  const generateMeme = () => {
    const a=Math.floor(Math.random()*5);
    console.log(arr[a]);
    console.log(api)
    fetch(`${api}${arr[a]}`)
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      })
      .catch((error)=>{
        const x=document.createElement("h2");
        x.innerHTML="Ooops Something Went Wrong ";
        x.style.justifyContent="center";
        x.style.alignItems="center";
        memeAuthor.appendChild(x);
      })
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);


  const x=document.querySelector("#btn");
  x.addEventListener('click',generateMeme)
  
  generateMeme();


  //https://meme-api.com/gimme/wholesomememes