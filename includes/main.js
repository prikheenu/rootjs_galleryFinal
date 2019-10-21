$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp() {

	if (window.localStorage.images) {
		pictures = window.localStorage.getItem("images").split(",");
	}
	makeGallery(pictures);
	addModalCloseHandler();

	$("#gallery").sortable({ 'update': makeGallery });

}


function makeGallery(imageArray) {

	for (var i = 0; i < pictures.length; i++) {
		var thumbnail = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4");
		$(thumbnail).css('background-image', 'url(' + pictures[i] + ')');
		var thumbnailCaption = $("<figurecaption>").text(pictures[i]);

		imageArray = thumbnail.append(thumbnailCaption);
		imageArray.click(displayImage);

		$("#gallery").append(imageArray);

	}
}

function addModalCloseHandler() {

	$(".modal img").click(function () {
		$(event.target).modal("hide");

	});
}

function displayImage() {

	var selectedImage = $(this).css('background-image');
	var modalSelect1 = selectedImage.lastIndexOf("/") + 1; //+1
	var modalSelect2 = selectedImage.lastIndexOf(".");
	var modalTitle = selectedImage.slice(modalSelect1, modalSelect2);

	console.log(modalTitle);

	$(".modal-title").text(modalTitle);
	var modalSrc1 = selectedImage.lastIndexOf("(") + 2; //+2
	var modalSrc2 = selectedImage.lastIndexOf(")") - 1; //-1
	$("img").attr("src", selectedImage.slice(modalSrc1, modalSrc2));
	$("#galleryModal").modal("show");

}
