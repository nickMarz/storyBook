$(document).ready(function(){function o(o){for(var e=0;e<o.length;e++){var t=o[e].outerHTML.length-5;c.push(o[e].outerHTML.slice(17,t))}}function e(){$("#next_button").click(),$("#prev_button").click()}$.getJSON("data/story_array.json",function(e){console.log(e.book);for(var t=[],n=[],a=[],c=[],s=0;s<e.book.length;s++){var l=0;t.push("<ul class='chapter-list' id='chapter_"+(s+1)+"'>"),$.each(e.book[s],function(o,e){t.push("<li class='page'>img/"+e.image_path+"</li>"),n.push("<p class='page-desc' id='page_desc_"+(s+1)+"-"+l+"'>"+e.page_desc+"</p>"),a.push(e.top),c.push(e.left),l++}),t.push("</ul>"),l=0}for(var i="",r=0;r<t.length;r++)i+=t[r];for(var g="",v=0;v<n.length;v++)g+=n[v];$(".book").append(i),$(".page-stories").append(g);var h=$(".chapter-list"),b=$(".page");o(b),p(),u()}),console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");var t=$(".book"),n=$(".chapter-list"),a=$(".page"),c=[],s=0,l=function(){return $(".navbar-hidden").css("height")},i=function(){$("<style>").prop("type","text/css").html(".visible { bottom: "+l()+";}").appendTo("head")};$(".navbar-menu").click(function(){$(".navbar").toggleClass("visible",500)}),$(".navbar-hidden").click(function(){$(".navbar").toggleClass("visible",500)});var r=function(o){$(".navbar-counter").text("Chapter: "+o)},g=function(o){var e="#page_desc_"+o;$(".page-desc").hide(),$(e).show(),l(),i()},p=function(){$("#prev_button").click(function(){s-=1;var o=c[s];$("#book_img").attr("src",c[s]),r(o.slice(4,7)),g(o.slice(4,7))}),$("#next_button").click(function(){s+=1;var o=c[s];$("#book_img").attr("src",c[s]),r(o.slice(4,7)),g(o.slice(4,7))})},u=function(){$("#book_img").attr("src",c[s]),r(c[s].slice(4,7))};console.log("vvvvvvv > Start debugging area"),console.log("Book: "),console.log(t),console.log("Chapters: "),console.log(n),console.log("^^^^^^^ > End debugging area"),setTimeout(e,10),console.log("Doc Ready")});