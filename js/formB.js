var email,serverEmail="@gmail.com",numberOfGuests="50-100",monthSelected="Enero",yearSelected="2021";function isEmpty(e){return output=!1,""!=e.val()&&(output=!0),output}function validateForm(){var e=!1,o=$("#name").val(),t=$("#lastName").val(),a=$("#cellPhone").val(),n=$("#email").val();return""!==o&&""!==t&&""!==a?validateEmail(n)?e=!0:($("#email").css("background-color","#ffdddd"),e=!1):(console.log(o),e=!1),e}function validateEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function shuffle(e){for(var o,t,a=e.length;0!==a;)t=Math.floor(Math.random()*a),o=e[a-=1],e[a]=e[t],e[t]=o;return e}$(document).on("pageshow","[data-role='page']",function(){$("div.ui-loader").remove()}),$(document).ready(function(){var e=location.href;$(".keyboard").keyboard({layout:"international",usePreview:!0,autoAccept:!0,css:{input:"form-control input-sm",container:"container-fluid",buttonDefault:"btn btn-default",buttonHover:"btn-primary",buttonAction:"active",buttonDisabled:"disabled"}}).addTyping({showTyping:!0,delay:50});var o=new Array;for(n=1;n<=50;n++)o.push("./img/carrusel/"+n+"-XV.png");for(var t,a=shuffle(o),n=0;n<=a.length;n++){let e=a[n];$(".carousel-inner").append('<div class="carousel-item"><img class="d-block w-100" src="'+e+'"></div>'),$(".carousel-indicators").append('<li data-target="#myCarousel" class="data-slides"data-slide-to="'+n+'"></li>')}if($(".carousel-item").first().addClass("active"),$(".data-slides").first().addClass("active"),$("#dd").on("click",function(e){$(this).toggleClass("active"),e.stopPropagation()}),$("#dropmonth").on("click",function(e){$(this).toggleClass("active"),e.stopPropagation()}),$("#dropyear").on("click",function(e){$(this).toggleClass("active"),e.stopPropagation()}),$("#dropemail").on("click",function(e){$(this).toggleClass("active"),e.stopPropagation()}),$("#updateFormApp").on("click",function(e){e.preventDefault(),function(){var e=$("#name").val(),o=$("#lastName").val(),t=$("#phoneNumber").val(),a=$("#schoolName").val(),n=$("#email").val(),i=serverEmail,s=n.trim()+i;if(""!==e&&""!==o&&""!==t&&""!==n){var r={name:e,lastName:o,phoneNumber:t,schoolName:a,email:s},l=JSON.stringify(r);sessionStorage.setItem("objectForm",l),window.location.href="app.html"}}()}),$("#dropEmail li").on("click",function(){var e=$(this).text();serverEmail=e,$("#dropemail").contents()[0].nodeValue=e}),$("#dropGuests li").on("click",function(){var e=$(this).text();numberOfGuests=e,$("#dd").contents()[0].nodeValue=e}),$("#dropYear li").on("click",function(){var e=$(this).text();yearSelected=e,$("#dropyear").contents()[0].nodeValue=e}),$("#dropMonth li").on("click",function(){var e=$(this).text();monthSelected=e,$("#dropmonth").contents()[0].nodeValue=e}),Array.prototype.unique=(t=function(e,o,t){return t.indexOf(e,o+1)<0},function(){return this.filter(t)}),$("#btnHome").on("click",function(){localStorage.clear(),selected=[],$.post("http://localhost:8080/SendUDP",{key:"SendUDP",value:"gohome"})}),e.indexOf("index.html")>1){var i={name:"Frida Yadira"};console.log(i),$("#SetNameXV").text(i.name),$(".sidebar-dropdown > a").click(function(){$(".sidebar-submenu").slideUp(200),$(this).parent().hasClass("active")?($(".sidebar-dropdown").removeClass("active"),$(this).parent().removeClass("active")):($(".sidebar-dropdown").removeClass("active"),$(this).next(".sidebar-submenu").slideDown(200),$(this).parent().addClass("active"))}),$("#close-sidebar").click(function(){$(".containerItems").addClass("fadeOut"),$(".mainContainer").css("z-index","999"),$("#close-sidebar").addClass("animated zoomOutLeft"),$("#cuadro1 > div").removeClass("animated lightSpeedIn"),$("#cuadro1 > div").addClass("animated bounceOutLeft"),$("#containerSidebar").on("animationend",setTimeout(function(){$(".sidebar-brand").fadeOut("slow",function(){$("#show-sidebar").show(),$("#cuadro2").css("z-index","9990"),$("#sidebar").css("z-index","1")})},1500))}),$("#show-sidebar").click(function(){$(".sidebar-brand").show(),$("#show-sidebar").hide(),$(".mainContainer").css("z-index","9999"),$(".containerItems").removeClass("fadeOut"),$(".containerItems").addClass("rollerRight"),$("#close-sidebar").addClass("heartbeat"),$("#sidebar").css("z-index","9999"),$("#cuadro1 > div").removeClass("animated bounceOutLeft"),$("#cuadro1 > div").addClass("animated lightSpeedIn")});var s="fondos0";$(".options").on("click",function(){$("#cuadro1").empty();var e=$(this).attr("id");console.log(e);var o="img/opciones/"+s+"/"+e+"/";for(n=0;n<3;n++){var t=o+n+".png";$("#cuadro1").append('<div class="elemento" at="'+e+n+'" draggable="true" style="background-image: url('+t+'); background-repeat: no-repeat; background-size: cover;"></div>')}$("#cuadro1").append('<div class="ok" style="background-image: url(img/kwait.png); background-repeat: no-repeat; background-size: cover;" id="endForm"></div>'),$("#cuadro1").show()}),document.querySelector("#cuadro2").addEventListener("touchmove",function(e){e.preventDefault()});var r,l=1,d=[],c=[];$(document).on("touchmove",".elemento",function(e){console.log("Empezando");var o=$(this).attr("id");$(this).removeClass("shake"),$("#cuadro2").removeClass("animated rubberBand");var t=e.originalEvent.touches[0],a=t.pageX,n=t.pageY;if(o)u&&(r=$(this),u=!1),$(this).css("position","absolute"),$(this).css("left",a+"px"),$(this).css("top",n+"px");else{!function(e){return c.includes(e.attr("at"))}($(this))?(r=$(this).clone(),$("#cuadro2").append(r),r.css("position","absolute"),r.css("left",a+"px"),r.css("top",n+"px"),r.addClass("pound"),r.attr("id","clonedElem"+l),c.push(r.attr("at"))):(r.css("position","absolute"),r.css("left",a+"px"),r.css("top",n+"px"),r.addClass("pound"))}});var u=!1;function p(e){var o={};return e.includes("flores")?o={position:"absolute","border-radius":"initial","background-color":"initial",left:"600px",top:"1050px",width:"350px",height:"350px","z-index":"101"}:e.includes("mesas")?o={position:"absolute","border-radius":"initial","background-color":"initial",left:"400px",top:"1300px",width:"700px",height:"400px","z-index":"100"}:e.includes("dj")?o={position:"absolute","border-radius":"initial","background-color":"initial",left:"0px",top:"500px",width:"700px",height:"400px","z-index":"100"}:e.includes("dulces")&&(o={position:"absolute","border-radius":"initial","background-color":"initial",left:"400px",top:"800px",width:"700px",height:"400px","z-index":"100"}),o}function m(e,o){e.addClass("shake");var t=parseInt(o.left.substring(-2)),a=parseInt(o.top.substring(-2));f(t,a,100),console.log("X: "+t+" Y: "+a)}function f(e,o,t){for(arr=[],angle=0,particles=[],offset_x=$("#dummy_debris").width()/2,offset_y=$("#dummy_debris").height()/2,n=0;n<t;n++)rad=angle*(Math.PI/180),x=Math.cos(rad)*(80+20*Math.random()),y=Math.sin(rad)*(80+20*Math.random()),arr.push([e+x,o+y]),z=$('<div class="debris" />'),z.css({left:e-offset_x,top:o-offset_x}).appendTo($("#content")),particles.push(z),angle+=360/t;$.each(particles,function(e,o){$(o).show(),$(o).animate({top:arr[e][1],left:arr[e][0],width:4,height:4,opacity:0},900,function(){$(o).remove()})})}$("body").on("touchend",".elemento",function(){console.log("OnDrop");var e=r,o=$(this).attr("at");if(d.includes(o))if($(this).removeClass("pound"),e.removeClass("pound"),e.offset().left>900)d=d.filter(e=>e!==o),c=c.filter(e=>e!==o),console.log(d),r.remove(),u=!0,$("#cuadro2").addClass("animated rubberBand");else{var t=p(o);e.css(t),e.addClass("shake")}else if(o.includes("fondo")){s=o,console.log(d),e.remove(),u=!0;var a=e.css("background-image");$("#cuadro2").css("background-image",a),d=[],c=[],$("#cuadro2").empty()}else{var n=function(e){var o=e.slice(0,-1);return d.find(e=>e.includes(o))}(o);if(n){d=d.filter(e=>e!==n),c=c.filter(e=>e!==n),console.log(d),$('.shake[at="'+n+'"]').remove(),u=!0,$(this).removeClass("pound"),e.removeClass("pound"),e.attr("id","clonedElem"+l);t=p(o);e.css(t),m(e,t),d.push(o),console.log(d),l++}else{$(this).removeClass("pound"),e.removeClass("pound"),e.attr("id","clonedElem"+l);t=p(o);e.css(t),m(e,t),d.push(o),console.log(d),l++}}}),$("body").on("click","#endForm",function(){}),$("body").on("click","#btnBackIndex",function(e){e.preventDefault(),location.reload(),window.location.href="index.html"}),$("#submitBtn").on("click",function(e){e.preventDefault(e),i.options=d,i.category="XV";var o=i.email;if(d.length>0&&validateEmail(o)){$("#submitBtn").prop("disabled",!0);var t=JSON.stringify(i);console.log(t),$.ajax({url:"http://ownserver/Kiosko/XV/sendFormXV.php",type:"POST",data:t,dataType:"json",success:function(e){sessionStorage.clear(),Swal.fire({type:"success",title:"Enviado",text:"¡Pronto te enviaremos más información!"}).then(e=>{$.post("http://localhost:8080/SendUDP",{key:"SendUDP",value:"gohome"})})}})}})}});
