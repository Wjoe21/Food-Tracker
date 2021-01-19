console.log("client running");

const dryFoodBtn = document.getElementById("dryFood");
const wetFoodBtn = document.getElementById("wetFood");

dryFoodBtn.addEventListener("click", function(e){
    console.log("dry food button was clicked");
    fetch("/dryfood", {method: "POST"})
     .then(function(res) {
         if(res.ok){
             console.log("button clicked recorded");
             return;
         }
         throw new Error("request failed");
     })
     .catch(function(error){
         console.log(error);
     })
});

wetFoodBtn.addEventListener("click", function(e){
    console.log("dry food button was clicked");
    fetch("/wetfood", {method: "POST"})
     .then(function(res) {
         if(res.ok){
             console.log("button clicked recorded");
             return;
         }
         throw new Error("request failed");
     })
     .catch(function(error){
         console.log(error);
     })
});

setInterval(function() {
    fetch("/totals", {method: "GET"})
     .then(function(res){
         if(res.ok) return res.json();
         throw new Error("request failed");
     })
     .then(function(data){
         document.getElementById("dryFoodLabel").innerHTML = `Dry food was given on ${data.DryFood}`;
         document.getElementById("wetFoodLabel").innerHTML = `Wet food was given on ${data.WetFood}`;
     })
     .catch(function(error){
         console.log(error);
     })
}, 1000);