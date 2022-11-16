broi_tochki = Math.floor(Math.random() * 100) + 200;
chestota = 1;
n = 10

arr = [];

for (i = 0; i < broi_tochki; i++) {
  arr.push({
    x: Math.random() * window.innerWidth/10*6 + window.innerWidth/10*2,
    y: Math.random() * window.innerHeight/10*6 + window.innerHeight/10*2,
    heigth: 0
  });
}


for (x = 0; x < window.innerWidth / chestota; x++) {
  for (y = 0; y < window.innerWidth / chestota; y++) {
    let distance = 10000;
    let alpha = 0;
    for (i = 0; i < arr.length; i++) {
      let newDistance = Math.sqrt(
        Math.pow(x * chestota - arr[i].x, 2) +
          Math.pow(y * chestota - arr[i].y, 2)
      );
      if (newDistance < distance) {
        distance = newDistance;
        alpha = i
      }
    }
    arr[alpha].heigth+=1
  }
}

terrain = [];

for (x = 0; x < window.innerWidth / chestota; x++) {
  terrain.push([]);
  for (y = 0; y < window.innerWidth / chestota; y++) {
    let distance = 10000;
    let color = ``;
    for (i = 0; i < arr.length; i++) {
      let newDistance = Math.sqrt(
        Math.pow(x * chestota - arr[i].x, 2) +
          Math.pow(y * chestota - arr[i].y, 2)
      );
      if (newDistance < distance) {
        distance = newDistance;
        let value = arr[i].heigth/n
        if(value >= 255){
          color = "#b6e3db"
        }
        if(value < 255){
          color = "#e5d9c2"
        }
        if(value < 204){
          color = "#725428"
        }
        if(value < 153){
          color = "#b5ba61"
        }
        if(value < 102){
          color = "#7c8d4c"
        }
        if(value < 51){
          color = "#707070"
        }
        if(value < 10){
          color = "#F8F8F8"
        }
        //color = `rgb(${value},${value},${value})`;
      }
    }
    terrain[x].push({ x: x * chestota, y: y * chestota, color: color });
  }
}

function draw() {
  for (x = 0; x < terrain.length; x++) {
    for (y = 0; y < terrain[x].length; y++) {
      context.fillStyle = terrain[x][y].color;
      context.fillRect(terrain[x][y].x, terrain[x][y].y, 10, 10);
    }
  }
}

function update() {}
