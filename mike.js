let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    function reset(){
      for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
      }
    }
    function startSlide(){
      reset();
      sliderImages[0].style.display = 'block';
    }
    function slideLeft(){
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }
    function slideRight(){
      reset();
      sliderImages[current + 1].style.display = 'block';
      current++;
    }
    arrowLeft.addEventListener('click', function(){
      if(current ===0){
        current = sliderImages.length;
      }
      slideLeft();
    });
    arrowRight.addEventListener('click', function(){
      if(current === sliderImages.length - 1){
        current = -1
      }
      slideRight();
    });
    startSlide();

let img1;
let pokeinfo;
class Pokemon{
  constructor(name,hp,attack,defense,abilities,img){
    this.hp = hp;
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.ability = abilities;
    this.image = img;
    this.container = document.getElementById('allpoke');
    this.element = document.createElement('div');
    this.element.className = 'product';
  }

  display(){
    pokeinfo = document.createElement("ol");
    pokeinfo.innerHTML = [this.name,"</br> " + "HP: " + this.hp,"</br> " + "Attack: " + this.attack,"</br> " + "Defense: " + this.defense,"</br> " + "Abilities:" + this.ability];
    img1 = document.createElement('img');
    this.element.appendChild(img1);
    img1.src = this.image;
    this.element.appendChild(pokeinfo);
    this.container.appendChild(this.element);
  }
}

class Trainer{
  constructor(){
    this.pokeData = [];
  }
  all(){
    return this.pokeData;
  }
  add(info){
    this.pokeData.push(info);
  }

  get(name){
    let counter = [];
    for(let i=0;i<this.pokeData.length;i++){
      if(name === this.pokeData[i].name){
        counter.push(this.pokeData[i]);
        return counter;
      }
    }
  }
}
let starRider = new Trainer();

let pikk;
function pika(){
  let pika ="https://fizal.me/pokeapi/api/v2/name/pikachu.json";
  axios.get(pika)
    .then(function(response){

      let img = response.data.sprites.front_default;

      let abi = response.data.abilities;
      let all1 = [];
      for(let i=0;i<abi.length;i++){
        all1.push(abi[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi.length;i++){
        concatenate +=all1[i] + " ";
      }

      let name = response.data.name;

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      pikk = new Pokemon(name,hp,attack,defense,concatenate,img);
      //
      // document.body.style.backgroundImage = "url('https://free4kwallpapers.com/no-watermarks/originals/2015/07/23/pokemon-pikachu.jpg')";
      // document.getElementById('mb').style.display = "none";
      // document.getElementById('sb').style.display = "none";
      // document.getElementById('trainer').style.display = "none";
      // document.body.style.backgroundSize = "cover";

      pikk.display();
      starRider.add(pikk);

   })
}

let mewt;
function mew(){
  let mew ="https://fizal.me/pokeapi/api/v2/name/mewtwo.json";
    axios.get(mew)
    .then(function mew(response){

      let img = response.data.sprites.front_default;

      let abi2 = response.data.abilities;
      let all2 = [];
      for(let i=0;i<abi2.length;i++){
        all2.push(abi2[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi2.length;i++){
        concatenate +=all2[i] + " ";
      }

      let name = response.data.name;

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      mewt = new Pokemon(name,hp,attack,defense,concatenate,img);
      //
      // document.body.style.backgroundImage = "url('http://www.biocenit.cat/mypics/11/117800/pokemon-mewtwo-wallpaper.png')";
      // document.body.style.backgroundSize = "cover";
      // document.getElementById('pb').style.display = "none";
      // document.getElementById('sb').style.display = "none";
      // document.getElementById('trainer').style.display = "none";

      mewt.display();
      starRider.add(mewt);
    })
}

let snorl;
function snor(){
  let snorlax ="https://fizal.me/pokeapi/api/v2/name/snorlax.json";
  axios.get(snorlax)

    .then(function snor(response){

      let img = response.data.sprites.front_default;

      let abi3 = response.data.abilities;
      let all3 = [];
      for(let i=0;i<abi3.length;i++){
        all3.push(abi3[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi3.length;i++){
        concatenate +=all3[i] + " ";
      }


      let name =response.data.name;

      let hp = response.data.stats[5].base_stat;

      let attack= response.data.stats[4].base_stat;

      let defense= response.data.stats[3].base_stat;

      snorl = new Pokemon(name,hp,attack,defense,concatenate,img);

      // document.body.style.backgroundImage = "url('https://wallpaper-house.com/data/out/5/wallpaper2you_74393.jpg')";
      // document.body.style.backgroundSize = "cover";
      // document.getElementById('mb').style.display = "none";
      // document.getElementById('pb').style.display = "none";
      // document.getElementById('trainer').style.display = "none";

      snorl.display();
      starRider.add(snorl);
    })
}

