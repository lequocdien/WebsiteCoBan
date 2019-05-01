// $(function(){
// 	// if($(window).width() < 768)
// 	// {
// 	// 	$(".navbar-rules").addClass("navbar-rules-collapse");
// 	// 	$(".navbar-rules a").click(function(){
// 	// 		$(".navbar-rules button").click();
// 	// 	});
// 	// }
// 	// else{
// 	$(window).scroll(function(){
// 		if($("html,body").scrollTop() > 100)
// 		{
// 			$(".navbar-rules").addClass("navbar-rules-collapse");
// 		}
// 		else{
// 			$(".navbar-rules").removeClass("navbar-rules-collapse");
// 		}
// 	});
// 	// }
// 	$("body").scrollspy({
// 		target: ".navbar-rules",
// 		offset: 51
// 	});
// 	$(".navbar-rules a").click(function(){
// 		var a = $(this).attr("href");
// 		$("html,body").stop().animate({
// 			scrollTop: $(a).offset().top - 50},
// 			1500,
// 			"easeInOutExpo"
// 		);
// 		return false;
// 	});
// 	$(".nav_collapse-hide").click(function(){
// 		$(".navbar-collapse").collapse("hide");
// 	})
	

// });



let key;
let plaintext;
let ciphertext;
let bangchucai =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
function timKiemViTri(chuCaiCanTim){
	for(let i = 0; i<26; i++){
		if(chuCaiCanTim == bangchucai[i])
		{
			return i;
		}
	}
	return -1;
}
function EnciptCaesar(){
	key = document.getElementById("caesar_key").value;
	key = Number(key);
	plaintext = document.getElementById("caesar_plainttext").value;
	plaintext = plaintext.toLowerCase();
	ciphertext = new Array(plaintext.length);
	if(key == "" || plaintext == ""){
		alert("Chua co gia tri");
	}
	else{
		for(let i = 0; i<plaintext.length; i++){
			if(plaintext[i] == " "){
				ciphertext[i] = plaintext[i];
			}
			else{
				if(timKiemViTri(plaintext[i]) == -1){
					alert("Loi");
				}
				ciphertext[i] = bangchucai[timKiemViTri(plaintext[i])+key];
			}
		}
	}
	ciphertext = ciphertext.join("");
	document.getElementById("caesar_ciphertext").value = ciphertext;
	
}