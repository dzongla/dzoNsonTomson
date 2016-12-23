$(document).ready(function() {
    
    
    //Obicni animate bez zavrsetka
    $(".box").animate({
        opacity: "1",
        marginTop: "50px",
        
    },3000);
    
    
	
    /* Eventovi - http://www.w3schools.com/jquery/jquery_events.asp  */
    $(".box").click(function() {
        alert("Hello world picke materine");      
    });
    
    
    $(".box").mouseenter(function() {
        
        $(this).animate({
            opacity: "0",
        },1000); 
        
    });
    
    $(".box").mouseleave(function() {
        $(this).css({
            backgroundColor: "red"
        });    
    });
    
    
    
    /* If & Switch */
    
    //provera broja
    var number = 5; 
    if(number == 5) {
        alert("Djes ba");
    }
    else if(number == 4) {
        alert("Hello");
    }
    else {
        alert();
    }
    
    
    //provera Godina
    var godine = 18;
    if(godine >= 18) {
        alert("Imate 18 ili vise godina");
    }
    else {
        alert("Nemo' da me apse");
    }
    
    
    //switch
    switch(godine) {
        case 18: {
            alert("Imate 18 godina");
            break;
        }
            
        case 0:
        case 1: {
            alert("Imate 0 ili 1 godinu");
            break;
        }
        default: {
            break;
        }
    }
    
    
    //nikola radio
    var ime = "nevazno ime";

    if(ime == "Toma") {
        
        alert("Djes Tomo sto te boli qrac");
  
    } 
    else if(ime == "Nikola"){
        alert("Djes Nikola picko mala");
    }
    
    else{
        
        alert("Nije Toma");
        
    }
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});