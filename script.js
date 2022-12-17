let signin=document.querySelector(".login");
signin.addEventListener("click",function(){
    window.location.assign("./signup.html");
})


// fetching for the first 8 cards
fetch("cards1.json").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    
    displayCards1(data);
}).catch(function(error){
    console.log(error);
})



function displayCards1(fetchedData){
   
    let parent=document.querySelector("#cards1");
    
    fetchedData.forEach(function(el){

   

    let card=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",el.image);

    let title=document.createElement("h3");
    title.textContent=el.title;

    let creator=document.createElement("p");
    creator.textContent=el.creator;

    card.append(img,title,creator);
    parent.append(card);


    })
}

// fetching for the 12 cards after the kerala image
fetch("cards2.json").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    
    displayCards2(data);
}).catch(function(error){
    console.log(error);
})

function displayCards2(fetchedData){
   
    let parent=document.querySelector("#cards2");
    
    fetchedData.forEach(function(el){

   

    let card=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",el.image);

    let title=document.createElement("h3");
    title.textContent=el.title;

    card.append(img,title);
    parent.append(card);

    })
}



// fetching for the 8  cards after the second carousel(which includes pricing as well)
fetch("cards3.json").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    
    displayCards3(data);
}).catch(function(error){
    console.log(error);
})

function displayCards3(fetchedData){
   
    let parent=document.querySelector("#cards3");
    
    fetchedData.forEach(function(el){

    let card=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",el.image);

    let title=document.createElement("h3");
    title.textContent=el.title;

    let creator=document.createElement("p");
    creator.textContent=el.creator;

    card.append(img,title,creator);
    parent.append(card);

    })
}


// creating the cards 4 data after the maldives image

fetch("cards4.json").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    
    displayCards4(data);
}).catch(function(error){
    console.log(error);
})

function displayCards4(fetchedData){
   
    let parent=document.querySelector("#cards4");
    
    fetchedData.forEach(function(el){

   

    let card=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",el.image);

    let title=document.createElement("h3");
    title.textContent=el.title;

    card.append(img,title);
    parent.append(card);

    })
}