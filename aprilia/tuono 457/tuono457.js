// searchbar 

let btn = document.querySelector("#btn")
let data = document.querySelector("#search-bar")
btn.onclick = () => {
    let value = data.value.toLowerCase();

    if(value === "ducati" ){
        window.location.href="../../ducati/ducati.html"
    }
    else if(value === "ducati panigale v4 r"){
        window.location.href="../../ducati/panigale/panigale.html"
    }
    else if(value === "ducati monster"){
        window.location.href="../../ducati/monster/monster.html"
    }
    else if(value === "kawasaki"){
        window.location.href="../../kawasaki/kawasaki.html"
    }
    else if(value === "kawasaki ninja h2 sx"){
        window.location.href="../../kawasaki/ninja h2 sx/ninja h2 sx.html"
    }
    else if(value === "kawasaki z900"){
        window.location.href="../../kawasaki/z 900/z 900.html"
    }
    else if(value === "bmw"){
        window.location.href="../../bmw/bmw.html"
    }
    else if(value === "bmw m 1000 rr"){
        window.location.href="../../bmw/m 1000 rr/m 1000 rr.html"
    }
    else if(value === "bmw g 310 rr"){
        window.location.href="../../bmw/g310rr/g310rr.html"
    }
    else if(value === "triumph"){
        window.location.href="../../triumph/triumph.html"
    }
    else if(value === "triumph speed triple 1200 rs"){
        window.location.href="../../triumph/speed triple 1200 rs/speed triple 1200 rs.html"
    }
    else if(value === "triumph rocket 3 r"){
        window.location.href="../../triumph/rocket 3 r/rocket 3 r.html"
    }
    else if(value === "aprilia"){
        window.location.href="../../aprilia/aprilia.html"
    }
    else if(value === "aprilia rsv4 factory 1100"){
        window.location.href="../../aprilia/rsv4 factory 1100/rsv4 factory 1100.html"
    }
    else if(value === "aprilia tuono 457"){
        window.location.href="../../aprilia/tuono 457/tuono457.html"
    }
    else{
        alert("Please enter the valid bike name!")
    }
}

data.onkeydown = (e) => {
    if(e.key === "Enter") btn.click();
}


// FAQ section

let q1 = document.querySelector("#q1")
let a1 = document.querySelector("#a1")
let q2 = document.querySelector("#q2")
let a2 = document.querySelector("#a2")
let q3 = document.querySelector("#q3")
let a3 = document.querySelector("#a3")
let q4 = document.querySelector("#q4")
let a4 = document.querySelector("#a4")

q1.onclick = () => {
    a1.style.display = a1.style.display === "block" ? "none" : "block";
    a2.style.display = "none"
    a3.style.display = "none"
    a4.style.display = "none"
}

q2.onclick = () => {
    a2.style.display = a2.style.display === "block" ? "none" : "block";
    a1.style.display = "none"
    a3.style.display = "none"
    a4.style.display = "none"
}

q3.onclick = () => {
    a3.style.display = a3.style.display === "block" ? "none" : "block";
    a2.style.display = "none"
    a1.style.display = "none"
    a4.style.display = "none"
}

q4.onclick = () => {
    a4.style.display = a4.style.display === "block" ? "none" : "block";
    a2.style.display = "none"
    a1.style.display = "none"
    a3.style.display = "none"
}


// images

let slide = 1;

  document.getElementById("next").onclick = () => {
    if (slide === 1) {
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "block";
      slide = 2;
    } else if (slide === 2) {
      document.getElementById("img2").style.display = "none";
      document.getElementById("img3").style.display = "block";
      slide = 3;
    } else if (slide === 3) {
      document.getElementById("img3").style.display = "none";
      document.getElementById("img4").style.display = "block";
      slide = 4;
    }
    else if (slide === 4) {
      document.getElementById("img4").style.display = "none";
      document.getElementById("img5").style.display = "block";
      slide = 5;
    } else if (slide === 5) {
      document.getElementById("img5").style.display = "none";
      document.getElementById("img1").style.display = "block";
      slide = 1;
    }
  }

  document.getElementById("prev").onclick = () => {
    if (slide === 1) {
      document.getElementById("img1").style.display = "none";
      document.getElementById("img5").style.display = "block";
      slide = 5;
    } else if (slide === 2) {
      document.getElementById("img2").style.display = "none";
      document.getElementById("img1").style.display = "block";
      slide = 1;
    } else if (slide === 3) {
      document.getElementById("img3").style.display = "none";
      document.getElementById("img2").style.display = "block";
      slide = 2;
    }
    else if (slide === 4) {
      document.getElementById("img4").style.display = "none";
      document.getElementById("img3").style.display = "block";
      slide = 3;
    } else if (slide === 5) {
      document.getElementById("img5").style.display = "none";
      document.getElementById("img4").style.display = "block";
      slide = 4;
  }
}


// location

let mumbai = document.querySelector("#mumbai")
let delhi = document.querySelector("#delhi")
let rajasthan = document.querySelector("#rajasthan")
let hydrabad = document.querySelector("#hydrabad")
let bangalore = document.querySelector("#bangalore")
let ducatiPrice = document.querySelector(".ducati-price")
let panigaleAmt = document.querySelectorAll(".panigale-amt")
let ducatiCity = document.querySelectorAll(".ducati-city")

mumbai.onclick = () => {
    alert("Check the On-Road Price in Mumbai")
    panigaleAmt.forEach(el => el.innerText="4,99,687")
    ducatiPrice.innerText="On-Road Price Mumbai"
    ducatiCity.forEach(el => el.innerText="Mumbai")
}
delhi.onclick = () => {
    alert("Check the On-Road Price in Delhi")
    panigaleAmt.forEach(el => el.innerText="4,52,287")
    ducatiPrice.innerText="On-Road Price Delhi"
    ducatiCity.forEach(el => el.innerText="Delhi")
}
rajasthan.onclick = () => {
    alert("Check the On-Road Price in Rajasthan")
    panigaleAmt.forEach(el => el.innerText="4,77,112")
    ducatiPrice.innerText="On-Road Price Rajasthan"
    ducatiCity.forEach(el => el.innerText="Rajasthan")
}
hydrabad.onclick = () => {
    alert("Check the On-Road Price in Hydrabad")
    panigaleAmt.forEach(el => el.innerText="4,68,087")
    ducatiPrice.innerText="On-Road Price Hydrabad"
    ducatiCity.forEach(el => el.innerText="Hydrabad")
}
bangalore.onclick = () => {
    alert("Check the On-Road Price in Bangalore")
    panigaleAmt.forEach(el => el.innerText="5,00,273")
    ducatiPrice.innerText="On-Road Price Bangalore"
    ducatiCity.forEach(el => el.innerText="Bangalore")
}

let city = document.querySelector("#input1")

city.onchange = () => {
let value = document.querySelector("#input1").value

if(value === "mumbai"){
    mumbai.onclick()
}
if(value === "delhi"){
    delhi.onclick()
}
if(value === "rajasthan"){
    rajasthan.onclick()
}
if(value === "hydrabad"){
    hydrabad.onclick()
}
if(value === "bangalore"){
    bangalore.onclick()
}
}


