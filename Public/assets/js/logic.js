// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// Get the modal
var modal1 = document.getElementById('myModal1');


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];



// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

$("#recruitmentmodal").on("click", function(){
	modal.style.display = "block";
})

$("#retentionmodal").on("click", function(){
	modal1.style.display = "block";
})