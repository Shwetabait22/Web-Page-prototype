// for menu
// container
var btn_Menu = document.getElementById("menu");
var btn_Crossmenu = document.getElementById("cross-menu");

var container_1 = document.getElementById("first-containerbdy");
var container_2 = document.getElementById("first-containerbdy-menu");



btn_Menu.addEventListener('click',()=> {
    container_1.style.display="none";
    container_2.style.display="block";
});

btn_Crossmenu.addEventListener('click',()=> {
    container_1.style.display="block";
    container_2.style.display="none";
});


// for open metric
$(".layouts").click(function(){
    $(".layouts").removeClass("active");
    $(this).addClass("active");
});

const layoutContainer = [...document.querySelectorAll('.layout')];

const nxtBtn = [...document.querySelectorAll('.nxt-Btn')];
const preBtn = [...document.querySelectorAll('.pre-Btn')];

layoutContainer.forEach((item, i) => {
    let containerDimension =item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
})


// for 2nd Slider
// for Btn
var btn_Next_1 = document.getElementById("type-Nextbtn-1");
var btn_Prev_1 = document.getElementById("type-Prebtn-1");

var btn_Next_2 = document.getElementById("type-Nextbtn-2");
var btn_Prev_2 = document.getElementById("type-Prebtn-2");

var btn_Next_3 = document.getElementById("type-Nextbtn-3");
var btn_Prev_3 = document.getElementById("type-Prebtn-3");

var btn_Done = document.getElementById("Done");

// for rectangle container
var rectAngle_1 = document.getElementById("Rectangle-1");

var rectAngle_2 = document.getElementById("Rectangle-2");

var rectAngle_3 = document.getElementById("Rectangle-3");

var rectangle_Done = document.getElementById("Rectangle1");

// action
// for next button
// for 1st next button
btn_Next_1.addEventListener('click', ()=>{
    rectAngle_1.style.display="none";
    rectAngle_2.style.display="block";
});

// for 2nd next button
btn_Next_2.addEventListener('click', ()=>{
    rectAngle_1.style.display="none";
    rectAngle_2.style.display="none";
    rectAngle_3.style.display="block";
});

// for 3nd next button
btn_Next_3.addEventListener('click', ()=>{
    rectAngle_1.style.display="none";
    rectAngle_2.style.display="none";
    rectAngle_3.style.display="none";
    rectangle_Done.style.display="block";
});

// for previous button

btn_Prev_2.addEventListener('click', ()=>{
    rectAngle_1.style.display="block";
    rectAngle_2.style.display="none";
});

btn_Prev_3.addEventListener('click', ()=>{
    rectAngle_1.style.display="none";
    rectAngle_2.style.display="block";
    rectAngle_3.style.display="none";
});

btn_Done.addEventListener('click', ()=>{
    rectAngle_1.style.display="block";
    rectAngle_2.style.display="none";
    rectAngle_3.style.display="none";
    rectangle_Done.style.display="none";
});
