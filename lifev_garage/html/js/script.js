String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{([0-9]+)}/g, function (match, index) {
      return typeof args[index] == 'undefined' ? match : args[index];
    });
  };
  

// $(".main__container").hide()
var cars;

// Dieser Code ist schwul geschrieben, weil Morice meinte ich soll es ohne react machen

window.addEventListener("message", (event) => {
    event = event.data;
    if (event.action == "show") {
        $(".main__container")[event.state ? "show" : "hide"]();
    } else if (event.action == "setcars") {
        cars = event.data;
        $(".main__scroll-item-container").empty();
        document.getElementById("input").value = "";
        for (var i=0; i < cars.length; i++) {
            $(".main__scroll-item-container").append(item.format(cars[i].model, i, cars[i].nickname, cars[i].isfav ? "img/star_active.png" : "img/star.png", state ? "Einparken" : "Ausparken"))
        }
    }
})

var fav_filtered = false;

const filterFav = (element) => {
    document.getElementById("input").value = "";
    fav_filtered = !fav_filtered;
    document.getElementById("star").src = `img/star${fav_filtered ? "_active" : ""}.png`;
    if (fav_filtered) {
        $(".main__scroll-item-container").empty();
        for (var i=0; i < cars.length; i++) {
            if (cars[i].isfav) {
                $(".main__scroll-item-container").append(item.format(cars[i].model, i, cars[i].nickname, cars[i].isfav ? "img/star_active.png" : "img/star.png", state ? "Einparken" : "Ausparken"))   
            }
        }
    } else {
        $(".main__scroll-item-container").empty();
        for (var i=0; i < cars.length; i++) {
            $(".main__scroll-item-container").append(item.format(cars[i].model, i, cars[i].nickname, cars[i].isfav ? "img/star_active.png" : "img/star.png", state ? "Einparken" : "Ausparken"))
        }
    }
}

const search = (element) => {
    for (var i=0; i < cars.length; i++) {
        let elements = document.getElementsByClassName('main__scroll-item');
        for (i = 0; i < elements.length; i++) { 
            if (!elements[i].innerHTML.toLowerCase().includes(element.value)) {
                elements[i].style.display="none";
            }
            else {
                elements[i].style.display="inline-block";                 
            }
        }
    }
}

window.addEventListener("keyup", (event) => {
    if (event.key == "Escape") {
        exit();
    }
})

var state;

const exit = () => {
    document.getElementById("input").value = "";
    $.post(`https://${GetParentResourceName()}/exit`);
    $(".main__scroll-item-container").empty();
    $(".main__container").hide();
    $(".main__top-right-button").removeClass("active");
}

const enable = (bool) => {
    document.getElementById("input").value = "";
    state = bool;
    $.post(`https://${GetParentResourceName()}/enable-${bool ? "parking" : "parkout"}`);
    $(".main__top-right-button").removeClass("active");
    $(`.${bool ? "parking" : "parkout"}`).addClass("active");
}

const action = (i) => {
    $.post(`https://${GetParentResourceName()}/${state ? "park-in" : "park-out"}`, JSON.stringify({plate: cars[i].plate}));
    exit();
}

const item = `
    <div class="main__scroll-item">
        <div class="main__scroll-item-main-container">
            <p class="main__scroll-item-header">{0}</p>
            <p class="main__Scroll-item-nickname">Name: <span onClick="changeNickname({1}, this)">{2}</span></p>
            <div class="main__star-container" onClick="favorize({1}, this)">
                <img src="{3}" alt="">
            </div>
            <div class="main__scroll-item-button" onClick="action({1})">
                <p>{4}</p>
            </div>
        </div>

        <div class="main__scroll-item-rename-container" style="display: none;">
            <input type="text" placeholder="Nickname">
            <div class="main__scroll-item-button" onClick="saveNickname({1}, this)">
                <p>Speichern</p>
            </div>
            <div class="main__scroll-item-rename-icon-container" onClick="exitNickname(this)">
                <img src="img/back.png" alt="">
            </div>
        </div>
    </div>
`

const exitNickname = (element) => {
    element.closest(".main__scroll-item").children[1].style.display = "none";
    element.closest(".main__scroll-item").children[0].style.display = "block";
}

const changeNickname = (i, element) => {
    element.closest(".main__scroll-item").children[0].style.display = "none";
    element.closest(".main__scroll-item").children[1].style.display = "block";
    element.closest(".main__scroll-item").children[1].children[0].value = cars[i].nickname != "Kein Nickname" ? cars[i].nickname : "";
}

const saveNickname = (i, element) => {
    var nickname = element.closest(".main__scroll-item").children[1].children[0].value;
    cars[i].nickname = nickname;
    $.post(`https://${GetParentResourceName()}/rename`, JSON.stringify({plate: cars[i].plate, nickname: nickname}));
    element.closest(".main__scroll-item").children[0].children[1].children[0].innerText = nickname;
    element.closest(".main__scroll-item").children[1].style.display = "none";
    element.closest(".main__scroll-item").children[0].style.display = "block";
}

const favorize = (i, element) => {
    cars[i].isfav = !cars[i].isfav
    $.post(`https://${GetParentResourceName()}/setvehfav`, JSON.stringify({plate: cars[i].plate, state: cars[i].isfav}));
    element.closest(".main__scroll-item").children[0].children[2].children[0].src = cars[i].isfav ? "img/star_active.png" : "img/star.png";
}