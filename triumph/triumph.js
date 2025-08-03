// searchbar 

let btn = document.querySelector("#btn")
let data = document.querySelector("#search-bar")
btn.onclick = () => {
    let value = data.value.toLowerCase();

    if(value === "ducati" ){
        window.location.href="../ducati/ducati.html"
    }
    else if(value === "ducati panigale v4 r"){
        window.location.href="../ducati/panigale/panigale.html"
    }
    else if(value === "ducati monster"){
        window.location.href="../ducati/monster/monster.html"
    }
    else if(value === "kawasaki"){
        window.location.href="../kawasaki/kawasaki.html"
    }
    else if(value === "kawasaki ninja h2 sx"){
        window.location.href="../kawasaki/ninja h2 sx/ninja h2 sx.html"
    }
    else if(value === "kawasaki z900"){
        window.location.href="../kawasaki/z 900/z 900.html"
    }
    else if(value === "bmw"){
        window.location.href="../bmw/bmw.html"
    }
    else if(value === "bmw m 1000 rr"){
        window.location.href="../bmw/m 1000 rr/m 1000 rr.html"
    }
    else if(value === "bmw g 310 rr"){
        window.location.href="../bmw/g310rr/g310rr.html"
    }
    else if(value === "triumph"){
        window.location.href="../triumph/triumph.html"
    }
    else if(value === "triumph speed triple 1200 rs"){
        window.location.href="../triumph/speed triple 1200 rs/speed triple 1200 rs.html"
    }
    else if(value === "triumph rocket 3 r"){
        window.location.href="../triumph/rocket 3 r/rocket 3 r.html"
    }
    else if(value === "aprilia"){
        window.location.href="../aprilia/aprilia.html"
    }
    else if(value === "aprilia rsv4 factory 1100"){
        window.location.href="../aprilia/rsv4 factory 1100/rsv4 factory 1100.html"
    }
    else if(value === "aprilia tuono 457"){
        window.location.href="../aprilia/tuono 457/tuono457.html"
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

q1.onclick = () => {
    a1.style.display = a1.style.display === "block" ? "none" : "block";
    a2.style.display = "none"
}

q2.onclick = () => {
    a2.style.display = a2.style.display === "block" ? "none" : "block";
    a1.style.display = "none"
}


// images section

let speed = document.querySelector(".speed-triple1200rs-img")
let rocket = document.querySelector(".rocket3r-img")
let speed1 = document.querySelector("#speed-triple1200rs-img")
let rocket1 = document.querySelector("#rocket3r-img")

speed.onclick = () => {
    window.location.href="speed triple 1200 rs/speed triple 1200 rs.html"
}

rocket.onclick = () => {
    window.location.href="rocket 3 r/rocket 3 r.html"
}

speed1.onclick= () => {
    window.location.href="speed triple 1200 rs/speed triple 1200 rs.html"
}

rocket1.onclick = () => {
    window.location.href="rocket 3 r/rocket 3 r.html"
}


// bikes logo section

let kawasaki = document.querySelector(".kawasaki")
let bmw = document.querySelector(".bmw")
let ducati = document.querySelector(".ducati")
let aprilia = document.querySelector(".aprilia")

kawasaki.onclick = () => {
    window.location.href="../kawasaki/kawasaki.html"
}

bmw.onclick = () => {
    window.location.href="../bmw/bmw.html"
}

ducati.onclick = () => {
    window.location.href="../ducati/ducati.html"
}

aprilia.onclick = () => {
    window.location.href="../aprilia/aprilia.html"
}

// compare btn

let compareBtn = document.querySelector("#compare-btn")

compareBtn.onclick = () => {
    window.location.href="comparison/comparison.html"
}


// location

let mumbai = document.querySelector("#mumbai")
let delhi = document.querySelector("#delhi")
let rajasthan = document.querySelector("#rajasthan")
let hydrabad = document.querySelector("#hydrabad")
let bangalore = document.querySelector("#bangalore")
let ducatiPrice = document.querySelectorAll(".ducati-price")
let panigaleAmt = document.querySelectorAll(".panigale-amt")
let monsterAmt = document.querySelectorAll(".monster-amt")

mumbai.onclick = () => {
    alert("Check the On-Road Price in Mumbai")
    panigaleAmt.forEach(el => el.innerText="22,13,144")
    monsterAmt.forEach(el => el.innerText="27,12,986")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Mumbai")
}
delhi.onclick = () => {
    alert("Check the On-Road Price in Delhi")
    panigaleAmt.forEach(el => el.innerText="21,15,974")
    monsterAmt.forEach(el => el.innerText="24,49,106")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Delhi")
}
rajasthan.onclick = () => {
    alert("Check the On-Road Price in Rajasthan")
    panigaleAmt.forEach(el => el.innerText="24,35,256")
    monsterAmt.forEach(el => el.innerText="26,20,715")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Rajasthan")
}
hydrabad.onclick = () => {
    alert("Check the On-Road Price in Hydrabad")
    panigaleAmt.forEach(el => el.innerText="22,53,924")
    monsterAmt.forEach(el => el.innerText="25,37,066")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Hydrabad")
}
bangalore.onclick = () => {
    alert("Check the On-Road Price in Bangalore")
    panigaleAmt.forEach(el => el.innerText="23,15,094")
    monsterAmt.forEach(el => el.innerText="27,14,366")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Bangalore")
}