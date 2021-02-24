const url = "https://api.quotable.io/random";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; 
    document.querySelector("#author").innerHTML = data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });  
   
}
 // Repeat generateQuote() every 10 seconds
setInterval(generateQuote() ,1000);
//Note - 10000 milliseconds = 10

function generate() {

  let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
  function populate(a) {
    for ( let i = 0; i < 6; i++ ) {
      let x = Math.round( Math.random() * 14 );
      let y = hexValues[x];
      a += y;
    }
    return a;
  }
  
  let newColor1 = populate('#');
  let newColor2 = populate('#');
  let angle = Math.round( Math.random() * 360 );
  
  let gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  
  document.body.style.background = gradient;  
}


  generate();