$(document).ready(function(){function o(){$("#next_button").click(),$("#prev_button").click()}testJSONData=$.getJSON("data/story_array.json"),$.getJSON("data/story_array.json",function(o){console.log(o.book);for(var e=[],t=[],n=0;n<o.book.length;n++)console.log("---------------------------"),$.each(o.book[n],function(o,a){e.push("<li class='page'>img/"+a.image_path+"</li>"),t.push("<p class='page-desc' id='page_desc_"+n+"-0'>"+a.page_desc+"</p>")});console.log("// Page images//"),console.log(e),console.log("// Page stories//"),console.log(t),console.log("// End new JSON //")}),console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");var e=$(".book"),t=$(".chapter-list"),n=$(".page"),a=[],l=0,s=function(){return $(".navbar-hidden").css("height")};$("<style>").prop("type","text/css").html(".visible { bottom: "+s()+";}").appendTo("head");var c=function(){$("<style>").prop("type","text/css").html(".visible { bottom: "+s()+";}").appendTo("head")};$(".navbar-menu").click(function(){$(".navbar").toggleClass("visible",500)}),$(".navbar-hidden").click(function(){$(".navbar").toggleClass("visible",500)});for(var g=function(o){$(".navbar-counter").text("Chapter: "+o)},i=0;i<n.length;i++){var r=n[i].outerHTML.length-5;a.push(n[i].outerHTML.slice(17,r))}var p=function(o){var e="#page_desc_"+o;$(".page-desc").hide(),$(e).show(),s(),c()};$("#prev_button").click(function(){l-=1;var o=a[l];$("#book_img").attr("src",a[l]),g(o.slice(4,7)),p(o.slice(4,7))}),$("#next_button").click(function(){l+=1;var o=a[l];$("#book_img").attr("src",a[l]),g(o.slice(4,7)),p(o.slice(4,7))}),$("#book_img").attr("src",a[l]),g(a[l].slice(4,7));var u=parseInt($("#book_img").css("width"),10),v=parseInt(screen.width,10),b=(v-u)/2,d=$("#pulse_icon");d.draggable({containment:"#book_img",scroll:!1}),d.attr("style","left: "+(b+30)+"px; top: 10px;");var h=d.attr("style");$("#body").change(function(){h=d.attr("style"),console.log(d.attr("style")),console.log("Body Change")}),d.change(function(){h=d.attr("style"),console.log(h),console.log("Icon Change")}),console.log("vvvvvvv > Start debugging area"),console.log("Book: "),console.log(e),console.log("Chapters: "),console.log(t),console.log("^^^^^^^ > End debugging area"),setTimeout(o,10),console.log("Doc Ready")});