$(document).ready(function(){
    const tane = document.querySelector(".tane");
    

    $(".kategori").click(function(){
        $(this).toggleClass("secildi");
        let i = 0;
        const secilmisler = document.querySelectorAll(".secildi");
        secilmisler.forEach(function(p){ 
            i++;
        });
        
        tane.innerHTML = i;

        if(i>0){
            $(".secilmemisse").hide();
        }else {
            $(".secilmemisse").show();
        }
    })

    
})