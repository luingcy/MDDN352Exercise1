

window.addEventListener('resize', function(){
	resize();
});

window.addEventListener('load', function(){
	resize();
});
function resize(){
    document.getElementById("hei").textContent = document.body.scrollHeight;
    document.getElementById("wid").textContent = document.body.scrollWidth;
}