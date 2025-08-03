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


// FAQs section

let q1 = document.querySelector("#q1")
let a1 = document.querySelector("#a1")
let q2 = document.querySelector("#q2")
let a2 = document.querySelector("#a2")
let q3 = document.querySelector("#q3")
let a3 = document.querySelector("#a3")

q1.onclick = () => {
    a1.style.display = a1.style.display === "block" ? "none" : "block";
    a2.style.display = "none"
    a3.style.display = "none"
}

q2.onclick = () => {
    a2.style.display = a2.style.display === "block" ? "none" : "block";
    a1.style.display = "none"
    a3.style.display = "none"
}

q3.onclick = () => {
    a3.style.display = a3.style.display === "block" ? "none" : "block";
    a2.style.display = "none"
    a1.style.display = "none"
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
    panigaleAmt.forEach(el => el.innerText="66,42,466")
    monsterAmt.forEach(el => el.innerText="3,79,760")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Mumbai")
}
delhi.onclick = () => {
    alert("Check the On-Road Price in Delhi")
    panigaleAmt.forEach(el => el.innerText="54,85,079")
    monsterAmt.forEach(el => el.innerText="3,59,623")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Delhi")
}
rajasthan.onclick = () => {
    alert("Check the On-Road Price in Rajasthan")
    panigaleAmt.forEach(el => el.innerText="58,26,156")
    monsterAmt.forEach(el => el.innerText="3,60,283")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Rajasthan")
}
hydrabad.onclick = () => {
    alert("Check the On-Road Price in Hydrabad")
    panigaleAmt.forEach(el => el.innerText="56,81,079")
    monsterAmt.forEach(el => el.innerText="3,84,498")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Hydrabad")
}
bangalore.onclick = () => {
    alert("Check the On-Road Price in Bangalore")
    panigaleAmt.forEach(el => el.innerText="60,75,349")
    monsterAmt.forEach(el => el.innerText="3,82,349")
    ducatiPrice.forEach(el => el.innerText="On-Road Price Bangalore")
}