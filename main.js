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
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000153127-1.jpg"
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


});