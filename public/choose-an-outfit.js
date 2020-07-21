//  ****  THIS IS ALL THE JAVASCRIPT FOR CHOOSE-AN-OUTFIT.HTML ONLY  ****

// Outfit Click and Display
document.getElementById("choose-outfit-buttons").addEventListener("click", handleChooseOutfitButtonsClick);
function handleChooseOutfitButtonsClick(event) {
    var img = document.createElement("IMG");
    img.setAttribute("src", `/images/${event.target.id}.jpg`);
    img.setAttribute("alt", event.target.title);
    img.setAttribute("height", "300px");
    img.setAttribute("usemap", `#${event.target.id}`);
    document.getElementById("outfit-image-container").innerHTML = "";
    document.getElementById("outfit-image-container").appendChild(img);
    // displays 'shop this look' button under the image displayed
    // var shopButton = document.createElement("button");
    // shopButton.innerHTML = "Shop this look";
    // document.getElementById("outfit-image-container").appendChild(shopButton);
    // when 'shop this look' button is clicked this is run
    // shopButton.onclick = function () {
        // let text;
        // if (event.target.id == "warm-casual") {
        //     text = 'TOP:'.bold()+ '$29.95 from H&M' + 'SHORTS:'.bold()+ '$19.95 from Witchery';
    //     } else if (event.target.id == "warm-work") {
    //         text = 'add warm work outfit details';
    //     } else if (event.target.id == "cold-casual") {
    //         text ='add cold casual outfit details';
    //     } else {   // "cold-work"
    //         text = 'add cold work outfit details';
        // };
        // document.getElementById("shop-look").innerHTML = text;
    // };
    // shopButton.onclick = function () {
    var myMap = document.createElement("map");
    myMap.name = event.target.id;

    var mapArea = document.createElement("area");
    var mapArea2 = document.createElement("area");
    var mapArea3 = document.createElement("area");
    var mapArea4 = document.createElement("area");
    if (myMap.name == "warm-casual") {
        mapArea.shape = "circle";
        mapArea.coords = "46,188,30";
        mapArea.target = "_blank";
        mapArea.title = "Bag";
        mapArea.href = "https://www.witchery.com.au";

        mapArea2.shape = "rect";
        mapArea2.coords = "60,50,150,150";
        mapArea2.target = "_blank";
        mapArea2.title = "Shirt";
        mapArea2.href = "https://www.theiconic.com.au";

        mapArea3.shape = "rect";
        mapArea3.coords = "70,150,140,240";
        mapArea3.target = "_blank";
        mapArea3.title = "Shorts";
        mapArea3.href = "https://www.witchery.com.au";

        mapArea4.shape = "circle";
        mapArea4.coords = "185,185,30";
        mapArea4.target = "_blank";
        mapArea4.title = "Sandals";
        mapArea4.href = "https://www.countryroad.com.au";

    } else if (myMap.name == "warm-work") {
        mapArea.shape = "rect";
        mapArea.coords = "50,50,150,230";
        mapArea.target = "_blank";
        mapArea.title = "Scarf";
        mapArea.href = "https://www.witchery.com.au";

        mapArea2.shape = "rect";
        mapArea2.coords = "200,25,300,250";
        mapArea2.target = "_blank";
        mapArea2.title = "Dress 1";
        mapArea2.href = "https://www.theiconic.com.au";

        mapArea3.shape = "rect";
        mapArea3.coords = "350,50,450,230";
        mapArea3.target = "_blank";
        mapArea3.title = "Dress 2";
        mapArea3.href = "https://www.witchery.com.au";
    }
    myMap.appendChild(mapArea);
    myMap.appendChild(mapArea2);
    myMap.appendChild(mapArea3);
    myMap.appendChild(mapArea4);

    document.getElementById("shop-look").appendChild(myMap);
    // document.getElementById("shop-look").innerHTML = "Click on an item to be taken to the stores website."
}
// }

// Outfit generator - questionnaire/survey

// function to calculate the result of the survey
let shopOutfit;
function surveyAnswers() {
    var answerbox = document.getElementById('answer');
    if (document.forms["file"]["q1"].value == "ans1") {
        if (document.forms["file"]["q2"].value == "ans1") {
            // warm casual day
            // answerbox.innerHTML = "You answered ans1 ans1 - warm casual day";
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/9a/87/63/9a87633417038d51cd39bc1db1db9139.jpg\" height=\"300px\">";

        } else if (document.forms["file"]["q2"].value == "ans2") {
            // warm casual night
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/93/be/be/93bebe76cac43893cbf916c9434a2f1a--flat-lay-casual-chic.jpg\" height=\"300px\">";
        } else {
            // warm work
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/db/ff/f7/dbfff7f229bda49b07e9843350e0f12d.jpg\" height=\"300px\">";
        }
    } else if (document.forms["file"]["q1"].value == "ans2") {
        if (document.forms["file"]["q2"].value == "ans1") {
            // cold casual day
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/c2/3c/aa/c23caae3bc7e5479e24f26f0459e6f23.jpg\" height=\"300px\">";
        } else if (document.forms["file"]["q2"].value == "ans2") {
            // cold casual night
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/98/41/41/984141a664a55e96e7d57b0994efd086.jpg\" height=\"300px\">";
        } else {
            // cold work
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/ae/29/46/ae2946cee47429f50be377bb19ed36ae--flat-lay-new-new.jpg\" height=\"300px\">";
        }
    } else if (document.forms["file"]["q1"].value == "ans3") {
        if (document.forms["file"]["q2"].value == "ans1") {
            // rainy casual day
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/17/75/d0/1775d0ab9acbdb9a49dcf75861b75098--chunky-sweaters-chunky-knits.jpg\" height=\"300px\">";
        } else if (document.forms["file"]["q2"].value == "ans2") {
            // rainy casual night
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/474x/75/c4/0b/75c40b066a79053ac74bda4363244f05.jpg\" height=\"300px\">";
        } else {
            // rainy work
            answerbox.innerHTML = "<img src=\"https://i.pinimg.com/236x/f7/53/d0/f753d09878aad55415051cb96782cb22.jpg\" height=\"300px\">";
        }
    }

}


// program the reset button
function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
}
