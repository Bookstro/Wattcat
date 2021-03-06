$(document).ready(function(){

let kitap_kapaklari = [
    "https://i.dr.com.tr/cache/600x600-0/originals/0001800104001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001798552001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001784810001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001726678001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001687817001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000636017-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001786953001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001794290001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001691198001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001801935001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001801923001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000671636-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000064031-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000064552-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000561966-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000153127-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000662044-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000723974-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001779245001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000390308-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001781926001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0001749972001-1.jpg"
];

$(".kitap_kapak").each(function(){
    $(this).css("background-image","url(" + kitap_kapaklari[Math.floor(Math.random()*kitap_kapaklari.length)] + ")");
});

$(".rating_star").on("click","span",function(){
    $(this).prevAll().addClass("checked");
    $(this).addClass("checked");
    $(this).nextAll().removeClass("checked");
});

$(".begenenler div").each(function(){
    $(this).css("color",$(this).parent().parent().css("background-color"));
})

$(".kitap .baslik").each(function(){
    if($(this).text().length > 30){
        $(this).css("--display","block");
    }
});

$(".kitaplar .kitap img").each(function(){
    $(this).attr("src",kitap_kapaklari[Math.floor(Math.random()*kitap_kapaklari.length)]);
})

$(".ui_book_slider img").each(function(){
    $(this).attr("src",kitap_kapaklari[Math.floor(Math.random()*kitap_kapaklari.length)]);
})


var slider = tns({
    "container": ".ui_book_slider",
    "items": 5,
    "center": true,
    "fixedWidth": 550,
    "swipeAngle": false,
    "mouseDrag": true,
    "speed": 400
  });

document.querySelector(".tns-controls button:first-child").innerHTML = "<i class='material-icons'>navigate_before</i>";
document.querySelector(".tns-controls button:last-child").innerHTML = "<i class='material-icons'>navigate_next</i>";

$('.js-fillcolor').fillColor();

// modal başla
$(".flex2 .kitaplar .kitap img").click(function(){
    $(".modal, .arka_golge").fadeIn(300);
    $(".modal .kapak").attr("src",$(this).attr("src"));
})
$(".modal .kapat").click(function(){
    $(".arka_golge, .modal").fadeOut(300);
})

$(".ui_book_slider a.buton").click(function(){
    $(".modal, .arka_golge").fadeIn(300);
    $(".modal .kapak").attr("src",$(this).parent().prev().attr("src"));
});
// modal bitiş

// arama kutusu açılması için başla
$(".search_icon").click(function(){
    $("#arama_label, #arama_label .kapat").fadeIn(300);
    $(".search_icon, .menu_icon").fadeOut(300);
})
$(".kapat").click(function(){
    $("#arama_label, #arama_label .kapat").fadeOut(300);
    $(".search_icon, .menu_icon").fadeIn(300);
})
// arama kutusu açılması için bitiş

const side_linkler = document.querySelectorAll(".side_menu .linkler a");
const cizgi = document.querySelector(".cizgi");

$(".linkler a").click(function(){
    $(".linkler a").each(function(){
        $(this).removeClass("active");
    })
    $(this).addClass("active");
    
    let a = 0;
    side_linkler.forEach(function(p){
        a++;
        if(p.classList.contains("active") && a == 1)
            cizgi.style.top = "0px";
        else if(p.classList.contains("active") && a == 2)
            cizgi.style.top = "50px";
        else if (p.classList.contains("active") && a == 3)
            cizgi.style.top = "100px";
        else if (p.classList.contains("active") && a == 4)
            cizgi.style.top = "175px";
        else if (p.classList.contains("active") && a == 5)
            cizgi.style.top = "225px";
        else if (p.classList.contains("active") && a == 6)
            cizgi.style.top = "275px";
        else if (p.classList.contains("active") && a == 7)
            cizgi.style.top = "350px";
    });
})

$(".menu_icon").click(function(){
    $(".side_menu").animate({width:'toggle'},300);
})

});

