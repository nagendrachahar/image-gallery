var xmlhttp = new XMLHttpRequest();
var url = "data/gallery.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        //document.getElementById('ajaxResponse').innerHTML = this.responseText;
        var linkList = JSON.parse(this.responseText);
        myFunction(linkList);
        getLength(linkList);
        console.log(linkList);

    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    console.log(arr);
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += "<img"+ " " + "src=" + arr[i].thumnail + " " + "alt=" + arr[i].caption +">";
    }
    document.getElementById("imageContainer").innerHTML = out;
}

function sawImage(current){
    var getSrc = current.src;
    var getAlt = current.alt;
    console.log(getSrc);
    document.getElementById("mainImage").src = getSrc;
    document.getElementById("imageCaption").innerHTML = getAlt;
    document.getElementById("mainImageContainer").style.display = "block";
}

function closeImage(){
	  document.getElementById("mainImageContainer").style.display = "none";
}

document.getElementById("closeButton").addEventListener("click",function(){
	  closeImage();
});

function getLength(pop){
console.log(pop.length);
for (i = 0; i < pop.length; i++){
document.getElementsByTagName("img")[i].addEventListener("click",function(){
    sawImage(this);
});
}
}