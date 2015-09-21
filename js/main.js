$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// /*global define */
 var book = $('.book');
 var chapters = $('.chapter-list');
 var pages = $('.page');
 var list = [];
 var whichView = 0;

 // var size = $('.chapter-list').length;
 var height = $('.navbar-hidden').css('height');


// needed to set css for visible // needed to set css for visible //
$("<style>").prop("type", "text/css").html(".visible { bottom: " + height + ";}").appendTo("head");
// needed to set css for visible // needed to set css for visible //



// navbar menu slide up/down //

$(".navbar-menu").click(function(){
    $(".navbar").toggleClass('visible', 500);
    });


$(".navbar-hidden").click(function(){
    $(".navbar").toggleClass('visible', 500);
    });

// navbar menu slide up/down //


// update UI
var nav_counter_update = function(pos) {
	$('.navbar-counter').text("Chapter: " + pos);
};
// update UI

// Chapter Section

// Build list of images
for (var i = 0; i < pages.length; i++) {
	// figure out the length need to grab the whole file path
	// well need to re-write this when I change to adding a setup page
	// or upload section
	var remove = pages[i].outerHTML.length - 5;
		list.push(
		pages[i].outerHTML.slice(17,remove)
		);
	}


// Chapter display navigation controls ----------------------->
$('#prev_button').click(function(){
    	// Controls whic page img we are one //
    	whichView -= 1;
    	// allows us to use slice to pass to the 
    	// chapter display function
		var location = list[whichView];

        $('#book_img').attr('src',list[whichView]);
        

        console.log(whichView + " " + list[whichView]);

        nav_counter_update(location.slice(4,7));
    }
);

$('#next_button').click(function(){
    	// Controls whic page img we are one //
    	whichView += 1;
    	// allows us to use slice to pass to the 
    	// chapter display function
		var location = list[whichView];

        $('#book_img').attr('src',list[whichView]);
     	

     	console.log(whichView + " " + list[whichView]);

     	nav_counter_update(location.slice(4,7));
    }
);
// Chapter display navigation controls ----------------------->

// set the first image
// Future: Add defualt image view(possibly allow some way to set a logo?)
$('#book_img').attr('src',list[whichView]);
nav_counter_update(list[whichView].slice(4,7));

// debugging area, to be removed //
// debugging area, to be removed //
// debugging area, to be removed //

	// console.log("------------------------------");
	// for (var i = 0; i < chapters.length; i++) {
	// 	console.log(chapters[i]);
	// }
	// console.log("------------------------------");

	
	// console.log("------------------------------");
	// // console.log($('.visible').css('bottom'));
	// console.log("Book: ");
	console.log(book);
	// console.log("Chapters: ");
	console.log(chapters);
	// console.log("Pages: ");
	// console.log(pages);
	// console.log("------------------------------");
  	console.log("Doc Ready");

// debugging area, to be removed //
// debugging area, to be removed //
// debugging area, to be removed //
});