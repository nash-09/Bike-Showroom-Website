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


// EMI calculator

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
let input4 = document.querySelector("#input4")
let emiAmount1 = document.querySelector("#EMI1")
let emiAmount2 = document.querySelector("#EMI2")
let emiAmount3 = document.querySelector("#EMI3")
let emiAmount4 = document.querySelector("#EMI4")
let emiAmount5 = document.querySelector("#EMI5")
let emiAmount6 = document.querySelector("#EMI6")
let emiAmount7 = document.querySelector("#EMI7")
let n1 = 12;
let n2 = 24;
let n3 = 36;
let n4 = 48;
let n5 = 60;
let n6 = 72;
let n7 = 84;
let btn1 = document.querySelector("#btn1")

btn1.onclick = () => {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    let selectedEMI = document.querySelector("input[name='option']:checked")

    if (value1 === 0) {
        alert("Please enter the loan amount!")
    }
    else if(value2 === 0){
        alert("Please enter the rate of interest!")
    }
    else if(!selectedEMI){
        alert("Please choose the EMI option!")
    }
    else{
        let rate = value2/12/100;

        let emi1 = (value1 * rate * Math.pow(1+rate,n1)) / (Math.pow(1+rate,n1)-1);
        let emi2 = (value1 * rate * Math.pow(1+rate,n2)) / (Math.pow(1+rate,n2)-1);
        let emi3 = (value1 * rate * Math.pow(1+rate,n3)) / (Math.pow(1+rate,n3)-1);
        let emi4 = (value1 * rate * Math.pow(1+rate,n4)) / (Math.pow(1+rate,n4)-1);
        let emi5 = (value1 * rate * Math.pow(1+rate,n5)) / (Math.pow(1+rate,n5)-1);
        let emi6 = (value1 * rate * Math.pow(1+rate,n6)) / (Math.pow(1+rate,n6)-1);
        let emi7 = (value1 * rate * Math.pow(1+rate,n7)) / (Math.pow(1+rate,n7)-1);

        if(input3.checked){
            emi1 = ((value1 - emi1) * rate * Math.pow(1 + rate, n1)) / (Math.pow(1 + rate, n1) - 1);
            emi2 = ((value1 - emi2) * rate * Math.pow(1 + rate, n2)) / (Math.pow(1 + rate, n2) - 1);
            emi3 = ((value1 - emi3) * rate * Math.pow(1 + rate, n3)) / (Math.pow(1 + rate, n3) - 1);
            emi4 = ((value1 - emi4) * rate * Math.pow(1 + rate, n4)) / (Math.pow(1 + rate, n4) - 1);
            emi5 = ((value1 - emi5) * rate * Math.pow(1 + rate, n5)) / (Math.pow(1 + rate, n5) - 1);
            emi6 = ((value1 - emi6) * rate * Math.pow(1 + rate, n6)) / (Math.pow(1 + rate, n6) - 1);
            emi7 = ((value1 - emi7) * rate * Math.pow(1 + rate, n7)) / (Math.pow(1 + rate, n7) - 1);
        }

        emiAmount1.innerText = Math.round(emi1);
        emiAmount2.innerText = Math.round(emi2);
        emiAmount3.innerText = Math.round(emi3);
        emiAmount4.innerText = Math.round(emi4);
        emiAmount5.innerText = Math.round(emi5);
        emiAmount6.innerText = Math.round(emi6);
        emiAmount7.innerText = Math.round(emi7);
    }
    
}