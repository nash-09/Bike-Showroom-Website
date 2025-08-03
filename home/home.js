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


// bikes-logo-section

let ducati = document.querySelector(".ducati")
let kawasaki = document.querySelector(".kawasaki")
let bmw = document.querySelector(".bmw")
let triumph = document.querySelector(".triumph")
let aprilia = document.querySelector(".aprilia")

ducati.onclick = () => {
    window.location.href="../ducati/ducati.html"
}

kawasaki.onclick = () => {
    window.location.href="../kawasaki/kawasaki.html"
}

bmw.onclick = () => {
    window.location.href="../bmw/bmw.html"
}

triumph.onclick = () => {
    window.location.href="../triumph/triumph.html"
}

aprilia.onclick = () => {
    window.location.href="../aprilia/aprilia.html"
}


// top models

let ducatiTopModel = document.querySelector(".ducati-top-model")
let kawasakiTopModel = document.querySelector(".kawasaki-top-model")
let bmwTopModel = document.querySelector(".bmw-top-model")
let triumphTopModel = document.querySelector(".triumph-top-model")
let apriliaTopModel = document.querySelector(".aprilia-top-model")
let ducatiTopModel1 = document.querySelector("#ducati-model")
let kawasakiTopModel1 = document.querySelector("#kawasaki-model")
let bmwTopModel1 = document.querySelector("#bmw-model")
let triumphTopModel1 = document.querySelector("#triumph-model")
let apriliaTopModel1 = document.querySelector("#aprilia-model")

ducatiTopModel.onclick = () => {
    window.location.href="../ducati/panigale/panigale.html"
}

kawasakiTopModel.onclick = () => {
    window.location.href="../kawasaki/ninja h2 sx/ninja h2 sx.html"
}

bmwTopModel.onclick = () => {
    window.location.href="../bmw/m 1000 rr/m 1000 rr.html"
}

triumphTopModel.onclick = () => {
    window.location.href="../triumph/speed triple 1200 rs/speed triple 1200 rs.html"
}

apriliaTopModel.onclick = () => {
    window.location.href="../aprilia/rsv4 factory 1100/rsv4 factory 1100.html"
}

ducatiTopModel1.onclick = () => {
    window.location.href="../ducati/panigale/panigale.html"
}

kawasakiTopModel1.onclick = () => {
    window.location.href="../kawasaki/ninja h2 sx/ninja h2 sx.html"
}

bmwTopModel1.onclick = () => {
    window.location.href="../bmw/m 1000 rr/m 1000 rr.html"
}

triumphTopModel1.onclick = () => {
    window.location.href="../triumph/speed triple 1200 rs/speed triple 1200 rs.html"
}

apriliaTopModel1.onclick = () => {
    window.location.href="../aprilia/rsv4 factory 1100/rsv4 factory 1100.html"
}

// sell-section

let button = document.querySelector("#sell-section-btn")

button.onclick = () => {
    window.location.href="../sell bikes/sell bikes.html"
}


// location

let mumbai = document.querySelector("#mumbai")
let delhi = document.querySelector("#delhi")
let rajasthan = document.querySelector("#rajasthan")
let hydrabad = document.querySelector("#hydrabad")
let bangalore = document.querySelector("#bangalore")
let ducatiPrice = document.querySelector("#ducati-price")
let ducatiAmt = document.querySelector("#ducati-amt")
let kawasakiPrice = document.querySelector("#kawasaki-price")
let kawasakiAmt = document.querySelector("#kawasaki-amt")
let bmwPrice = document.querySelector("#bmw-price")
let bmwAmt = document.querySelector("#bmw-amt")
let triumphPrice = document.querySelector("#triumph-price")
let triumphAmt = document.querySelector("#triumph-amt")
let apriliaPrice = document.querySelector("#aprilia-price")
let apriliaAmt = document.querySelector("#aprilia-amt")

mumbai.onclick = () => {
    alert("Check the On-Road Price in Mumbai")
    ducatiAmt.innerText="80,79,161"
    ducatiPrice.innerText="On-Road Price Mumbai"
    kawasakiAmt.innerText="41,88,246"
    kawasakiPrice.innerText="On-Road Price Mumbai"
    bmwAmt.innerText="03,79,760"
    bmwPrice.innerText="On-Road Price Mumbai"
    triumphAmt.innerText="25,17,616"
    triumphPrice.innerText="On-Road Price Mumbai"
    apriliaAmt.innerText="38,57,912"
    apriliaPrice.innerText="On-Road Price Mumbai"
}
delhi.onclick = () => {
    alert("Check the On-Road Price in Delhi")
    ducatiAmt.innerText="77,50,410"
    ducatiPrice.innerText="On-Road Price Delhi"
    kawasakiAmt.innerText="37,14,620"
    kawasakiPrice.innerText="On-Road Price Delhi"
    bmwAmt.innerText="3,59,623"
    bmwPrice.innerText="On-Road Price Delhi"
    triumphAmt.innerText="22,72,936"
    triumphPrice.innerText="On-Road Price Delhi"
    apriliaAmt.innerText="34,82,792"
    apriliaPrice.innerText="On-Road Price Delhi"
}
rajasthan.onclick = () => {
    alert("Check the On-Road Price in Rajasthan")
    ducatiAmt.innerText="83,04,385"
    ducatiPrice.innerText="On-Road Price Rajasthan"
    kawasakiAmt.innerText="39,69,915"
    kawasakiPrice.innerText="On-Road Price Rajasthan"
    bmwAmt.innerText="3,79,508"
    bmwPrice.innerText="On-Road Price Rajasthan"
    triumphAmt.innerText="24,35,256"
    triumphPrice.innerText="On-Road Price Rajasthan"
    apriliaAmt.innerText="37,00,385"
    apriliaPrice.innerText="On-Road Price Rajasthan"
}
hydrabad.onclick = () => {
    alert("Check the On-Road Price in Hydrabad")
    ducatiAmt.innerText="80,97,161"
    ducatiPrice.innerText="On-Road Price Hydrabad"
    kawasakiAmt.innerText="37,96,107"
    kawasakiPrice.innerText="On-Road Price Hydrabad"
    bmwAmt.innerText="3,84,498"
    bmwPrice.innerText="On-Road Price Hydrabad"
    triumphAmt.innerText="23,54,496"
    triumphPrice.innerText="On-Road Price Hydrabad"
    apriliaAmt.innerText="36,07,832"
    apriliaPrice.innerText="On-Road Price Hydrabad"
}
bangalore.onclick = () => {
    alert("Check the On-Road Price in Bangalore")
    ducatiAmt.innerText="86,58,931"
    ducatiPrice.innerText="On-Road Price Bangalore"
    kawasakiAmt.innerText="40,61,978"
    kawasakiPrice.innerText="On-Road Price Bangalore"
    bmwAmt.innerText="3,82,349"
    bmwPrice.innerText="On-Road Price Bangalore"
    triumphAmt.innerText="25,19,028"
    triumphPrice.innerText="On-Road Price Bangalore"
    apriliaAmt.innerText="38,60,536"
    apriliaPrice.innerText="On-Road Price Bangalore"
}