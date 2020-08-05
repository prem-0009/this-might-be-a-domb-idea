1
const para = document.querySelector('p')
//changing the font color of tag p 
para.style.color = 'blue'

//heading color
document.querySelector('h1').style.fontSize = '5em'

//change the text inside tag p
para.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

//making 13th item transparent
document.querySelector('#item-13').style.opacity = '20%'

//change the 3rd item text
document.querySelector('#item-3').innerText = 'I say, "Hi!"'

//
const image = document.querySelector('img')
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
image.height = 300;

const myImage = document.querySelector('#addImage')
myImage.src = 'https://images.freeimages.com/images/large-previews/5b7/on-the-road-7-1384791.jpg'
myImage.height = 300;

const newList = document.querySelector('#item-16')
newList.className = 'item';
newList.innerText = `Won't get fooled again.`;