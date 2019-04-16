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
    "https://i.dr.com.tr/cache/600x600-0/originals/0001749972001-1.jpg",
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000670644-1.jpg"
];

$(".ust_blur img, .ust_cont img").attr("src",kitap_kapaklari[Math.floor(Math.random()*kitap_kapaklari.length)]);