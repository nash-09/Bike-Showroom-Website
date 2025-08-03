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


// form-submit-button

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
let input4 = document.querySelector("#subject")
let input5 = document.querySelector("#message")
let btn1 = document.querySelector("#btn1")

btn1.onclick = () => {
let value1 = input1.value;
let value2 = input2.value;
let value3 = input3.value;
let value4 = input4.value;
let value5 = input5.value;

    if(value1 === "" || value2 === "" || value3 === "" || value4 === "" || value5 === ""){
        alert("Please fill the form")
    }
    else{
        alert("Thanks for reaching out! Our team will get back to you within 24 hours.")
        location.reload();
    }
}