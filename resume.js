const lists = document.querySelector("#lists");
const listOne = document.querySelector(".listOne");
const listTwo = document.querySelector(".listTwo");
const info = document.querySelector("#info");

function showPage(page) {
    document.querySelectorAll(".content div").forEach(div => {
        div.style.display = "none";
    });
    document.querySelector(`#${page}`).style.display = "block";
    lists.style.display = "flex";
    listOne.style.display = "block";
    listTwo.style.display = "block";
    info.style.display = "block";
}

document.querySelectorAll(".buttons li").forEach(li => {
    li.onclick = function() {
        showPage(this.dataset.page);
    }
});

function showInfo(page2) {
    document.querySelectorAll("#info div").forEach(div => {
        div.style.display = "none";
    });
    document.querySelector(`#${page2}`).style.display = "block";
}

document.querySelectorAll(".listOne li").forEach(li => {
    li.onmouseover = function() {
        showInfo(this.dataset.page2);
    }
    li.onmouseout = function() {
        document.querySelector(`#${this.dataset.page2}`).style.display = "none";
    }
});