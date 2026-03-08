// basics of click event

const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {
    console.log("Button is clicked");
});

clickBtn.addEventListener("dblclick", function () {
    console.log("Button is clicked");
});