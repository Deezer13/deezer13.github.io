function showPage(page) {
    document.querySelectorAll(".content div").forEach(div => {
        div.style.display = "none";
    });
    document.querySelector(`#${page}`).style.display = "block";
}

document.querySelectorAll(".buttons li").forEach(li => {
    li.onclick = function() {
        showPage(this.dataset.page);
    }
});