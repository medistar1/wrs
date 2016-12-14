

$("#cleartextbox1").click(function() {
$("#textbox2").empty();
$("#result").empty();
$('.hotts').empty();
$('.kvadratici').empty();
$('.hotts').css("background", "initial");
$('.row1div > *').empty();

$('.sto .trireda').find('.brojevi').css("background", "#B9B8B8");

array.length = 0;
d = 0;
m = 0;
s = 0;
f = 0;
g = 0;
h = 0;
n = 0;
t = 0;
v = 0;
q = 0;
u = 0;
w = 0;
 yxy = 0;
 resd.length = 0;
inv = 0;
 invd.length = 0;
ame = 0;
 america.length = 0;
spa = 0;
 spain.length = 0;
bur = 0;
 burma.length = 0;
chi = 0;
 chile.length = 0;
egi = 0;
 egypt.length = 0;
fij = 0;
 fiji.length = 0;
fin = 0;
 finland.length = 0;
gre = 0;
 greece.length = 0;
ice = 0;
 iceland.length = 0;
ind = 0;
 india.length = 0;
lao = 0;
 laos.length = 0;
nor = 0;
 norway.length = 0;
sin = 0;
 singapore.length = 0;
som = 0;
 somalia.length = 0;
zim = 0;
 zimbabve.length = 0;
yem = 0;
 yemen.length = 0;
pol = 0;
 poland.length = 0;
nig = 0;
 niger.length = 0;
lib = 0;
 liban.length = 0;
lat = 0;
 latvia.length = 0;
mex = 0;
 mexico.length = 0;
gha = 0;
 ghana.length = 0;
 
 totalprored.length = 0;
 $(".testtwo1").empty();
 $(".test3").empty();
 totalproblack.length = 0;
 $(".testtwo2").empty();
 $(".test4").empty();
 totalproeven.length = 0;
 $(".testtwo3").empty();
 $(".test5").empty();
totalproodd.length = 0;
 $(".testtwo4").empty();
 $(".test6").empty();
totalpro1936.length = 0;
 $(".testtwo5").empty();
 $(".test7").empty();
totalpro118.length = 0;
 $(".testtwo6").empty();
 $(".test8").empty();
totalprorow1.length = 0;
 $(".testtwo7").empty();
 $(".test9").empty();
totalprorow2.length = 0;
 $(".testtwo8").empty();
 $(".test10").empty();
totalprorow3.length = 0;
 $(".testtwo9").empty();
 $(".test11").empty();
totalpro1st12.length = 0;
 $(".testtwo10").empty();
 $(".test12").empty();
totalpro2nd12.length = 0;
 $(".testtwo11").empty();
 $(".test13").empty();
totalpro3rd12.length = 0;
 $(".testtwo12").empty();
 $(".test14").empty();
 $("#profit").empty();



});


$(".do").click(function() {
	window.scrollBy(0, 200);
	
});
$(".up").click(function() {
	window.scrollBy(0, -360);
	
});





var eureka = Array();
var yxy = 0;
var resd = Array();
var inv = 0;
var invd = Array();
var ame = 0;
var america = Array();
var spa = 0;
var spain = Array();
var bur = 0;
var burma = Array();
var chi = 0;
var chile = Array();
var egi = 0;
var egypt = Array();
var fij = 0;
var fiji = Array();
var fin = 0;
var finland = Array();
var gre = 0;
var greece = Array();
var ice = 0;
var iceland = Array();
var ind = 0;
var india = Array();
var lao = 0;
var laos = Array();
var nor = 0;
var norway = Array();
var sin = 0;
var singapore = Array();
var som = 0;
var somalia = Array();
var zim = 0;
var zimbabve = Array();
var yem = 0;
var yemen = Array();
var pol = 0;
var poland = Array();
var nig = 0;
var niger = Array();
var lib = 0;
var liban = Array();
var lat = 0;
var latvia = Array();
var mex = 0;
var mexico = Array();
var gha = 0;
var ghana = Array();
var totred = 0;
var totalprored = Array();
var totblack = 0;
var totalproblack = Array();
var totalproeven = Array();
var toteven = 0;
var totalproodd = Array();
var totodd = 0;
var totalpro1936 = Array();
var tot1936 = 0;
var totalpro118 = Array();
var tot118 = 0;
var totalprorow1 = Array();
var totrow1 = 0;
var totalprorow2 = Array();
var totrow2 = 0;
var totalprorow3 = Array();
var totrow3 = 0;
var totalpro1st12 = Array();
var tot1st12 = 0;
var totalpro2nd12 = Array();
var tot2nd12 = 0;
var totalpro3rd12 = Array();
var tot3rd12 = 0;

var ab = 0;
var novir = Array();

 var x = 0;   
var array = Array();


var putadva = ["0", "1", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048", "4096", "8192", "16384"];
 var d = 0;
 var m = 0;
 var s = 0;
 var f = 0;
 var g = 0;
 var h = 0;
 var putatri = ["0", "1", "1", "2", "3", "4", "6", "9", "14", "21", "31", "47", "70", "105", "158", "237", "355", "533", "801", "1201", "1801"];
 var n = 0;
 var t = 0;
 var v = 0;
 var q = 0;
 var u = 0;
 var w = 0;  



 $('.brojevi').click(function() {

		$(".dvojka").css("background", "black"); 
		$('.sto .trireda').find('.brojevi').css("background", "#B9B8B8");
	 
		$(".dvojka").append($(this).clone(false).addClass('cloned'));
		$('.dvojka').find('.crveni').css({background: 'black', color: 'red'});
		$('.dvojka').find('.crni').css({background: 'black', color: 'white'});
		$('.dvojka').find('.nula').css({background: 'black', color: 'green'});
		var hot0 = $('.dvojka #btn0').length; $("#hott0").html(hot0); if (hot0 > 0) {$("#hott0").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot1 = $('.dvojka #btn1').length; $("#hott1").html(hot1); if (hot1 > 0) {$("#hott1").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot2 = $('.dvojka #btn2').length; $("#hott2").html(hot2); if (hot2 > 0) {$("#hott2").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot3 = $('.dvojka #btn3').length; $("#hott3").html(hot3); if (hot3 > 0) {$("#hott3").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot4 = $('.dvojka #btn4').length; $("#hott4").html(hot4); if (hot4 > 0) {$("#hott4").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot5 = $('.dvojka #btn5').length; $("#hott5").html(hot5); if (hot5 > 0) {$("#hott5").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot6 = $('.dvojka #btn6').length; $("#hott6").html(hot6); if (hot6 > 0) {$("#hott6").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot7 = $('.dvojka #btn7').length; $("#hott7").html(hot7); if (hot7 > 0) {$("#hott7").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot8 = $('.dvojka #btn8').length; $("#hott8").html(hot8); if (hot8 > 0) {$("#hott8").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot9 = $('.dvojka #btn9').length; $("#hott9").html(hot9); if (hot9 > 0) {$("#hott9").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot10 = $('.dvojka #btn10').length; $("#hott10").html(hot10); if (hot10 > 0) {$("#hott10").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot11 = $('.dvojka #btn11').length; $("#hott11").html(hot11); if (hot11 > 0) {$("#hott11").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot12 = $('.dvojka #btn12').length; $("#hott12").html(hot12); if (hot12 > 0) {$("#hott12").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot13 = $('.dvojka #btn13').length; $("#hott13").html(hot13); if (hot13 > 0) {$("#hott13").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot14 = $('.dvojka #btn14').length; $("#hott14").html(hot14); if (hot14 > 0) {$("#hott14").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot15 = $('.dvojka #btn15').length; $("#hott15").html(hot15); if (hot15 > 0) {$("#hott15").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot16 = $('.dvojka #btn16').length; $("#hott16").html(hot16); if (hot16 > 0) {$("#hott16").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot17 = $('.dvojka #btn17').length; $("#hott17").html(hot17); if (hot17 > 0) {$("#hott17").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot18 = $('.dvojka #btn18').length; $("#hott18").html(hot18); if (hot18 > 0) {$("#hott18").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot19 = $('.dvojka #btn19').length; $("#hott19").html(hot19); if (hot19 > 0) {$("#hott19").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot20 = $('.dvojka #btn20').length; $("#hott20").html(hot20); if (hot20 > 0) {$("#hott20").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot21 = $('.dvojka #btn21').length; $("#hott21").html(hot21); if (hot21 > 0) {$("#hott21").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot22 = $('.dvojka #btn22').length; $("#hott22").html(hot22); if (hot22 > 0) {$("#hott22").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot23 = $('.dvojka #btn23').length; $("#hott23").html(hot23); if (hot23 > 0) {$("#hott23").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot24 = $('.dvojka #btn24').length; $("#hott24").html(hot24); if (hot24 > 0) {$("#hott24").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot25 = $('.dvojka #btn25').length; $("#hott25").html(hot25); if (hot25 > 0) {$("#hott25").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot26 = $('.dvojka #btn26').length; $("#hott26").html(hot26); if (hot26 > 0) {$("#hott26").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot27 = $('.dvojka #btn27').length; $("#hott27").html(hot27); if (hot27 > 0) {$("#hott27").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot28 = $('.dvojka #btn28').length; $("#hott28").html(hot28); if (hot28 > 0) {$("#hott28").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot29 = $('.dvojka #btn29').length; $("#hott29").html(hot29); if (hot29 > 0) {$("#hott29").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot30 = $('.dvojka #btn30').length; $("#hott30").html(hot30); if (hot30 > 0) {$("#hott30").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot31 = $('.dvojka #btn31').length; $("#hott31").html(hot31); if (hot31 > 0) {$("#hott31").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot32 = $('.dvojka #btn32').length; $("#hott32").html(hot32); if (hot32 > 0) {$("#hott32").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot33 = $('.dvojka #btn33').length; $("#hott33").html(hot33); if (hot33 > 0) {$("#hott33").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot34 = $('.dvojka #btn34').length; $("#hott34").html(hot34); if (hot34 > 0) {$("#hott34").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot35 = $('.dvojka #btn35').length; $("#hott35").html(hot35); if (hot35 > 0) {$("#hott35").css({background: '#DADFF9', color: '#cc0000'});}
	    var hot36 = $('.dvojka #btn36').length; $("#hott36").html(hot36); if (hot36 > 0) {$("#hott36").css({background: '#DADFF9', color: '#cc0000'});}
	    	
		
	   

       array[x] = $(this).attr("class");
       x<array.length; x++;
        if (array.length > 15) {
        document.getElementById("cleartextbox1").click();
        x=0;

}else{ 
       var noviarray = array.slice(-5);
       $('#result').html(noviarray + "<br />");
      
      if (noviarray[0].includes("crni") && noviarray[1].includes("crni")
				&& noviarray[2].includes("crni") && noviarray[3].includes("crni") && noviarray[4].includes("crni")) {
			 
			 $("#row1div222").empty();  
			 d = (d + 1) % putadva.length;
		 
				$("#first").html(putadva[d]);
			
			 console.log(true);
			 
			 var resultd = putadva[d] * 2;
			 console.log(resultd);
			 resd[yxy] = resultd;
			 yxy<resd.length; yxy++;
			 console.log(resd);
		
			 var invdva = putadva[d] * 1;
			 invd[inv] = invdva;
			 inv<invd.length; inv++;
			 console.log(invdva);
			 var investd = invd.reduce(function(total, num) { return total + num}
				, 0);
			 console.log(invd)
			 console.log(investd);
			
			 $("#row1div111").html("Bet" + " " + investd + " " + "$" + " " + "on RED");
			

			} else {
				var nova = invd;
				console.log(nova);
				var npp = invd.reduce(function(total, num) { return total + num}
				, 0); 
				console.log(npp);
			 
				invd.length = 0;
				var noviresd = resd.slice(-1);
				 var winred = resd.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				console.log(noviresd);
			 
				if (resd.slice(-1).length > 0) {
				$("#row1div222").html("Win" + " " + resd.slice(-1) + " " + "$"+ " " + "on RED").fadeIn();
				 
				 var profirredd = profitRed(npp, winred);
				 function profitRed(a, b) {return b - a;}
		
				if (npp > 0) {
				var profired = $(".testtwo1").html(profitRed(npp, winred));
				console.log(profirredd);
				console.log($(".testtwo1").html());

			 
				totalprored[totred] = $(".testtwo1").html();
				totred<totalprored.length; totred++;
				console.log(totalprored);
				var arrayOfRed = totalprored.map(Number);
				var profitnacrv = arrayOfRed.reduce(function(total, num) { return total + num}
				, 0); 
				 $(".test3").html("Total" + " " + profitnacrv + " " + "$" + " " + "on RED");
				}

				}
				$("#first").empty();
				d = 0;
			
				

				console.log(false);
			} 

		


		 if (noviarray[0].includes("crveni") && noviarray[1].includes("crveni") 
			&& noviarray[2].includes("crveni") && noviarray[3].includes("crveni") && noviarray[4].includes("crveni")) {
			 
			 $("#row1div4").empty();  
			 m = (m + 1) % putadva.length;
		 
			 $("#second").html(putadva[m]);
			 
			 console.log(true);
			 var cyprus = putadva[m] * 2;
			 egypt[egi] = cyprus;
			 egi<egypt.length; egi++;
			 var estonia = putadva[m] * 1;
			 fiji[fij] = estonia;
			 fij<fiji.length; fij++;
			 var france = fiji.reduce(function(total, num) { return total + num}
				, 0);
			 console.log(colombia);
			 $("#row1div3").html("Bet" + " " + france + " " + "$" + " " + "on BLACK");

			} else {
				var fijland = fiji;
				var fik = fiji.reduce(function(total, num) { return total + num}
				, 0);
				fiji.length = 0;
				var romania = egypt.slice(-1);
				var winblack = egypt.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (egypt.slice(-1).length > 0) {
				$("#row1div4").html("Win" + " " + egypt.slice(-1) + " " + "$"+ " " + "on BLACK").fadeIn();
				
				var prblack= profitBlack(fik, winblack);
				function profitBlack(a, b) {return b - a;}
				if (fik > 0) {
				var profiblack = $(".testtwo2").html(profitBlack(fik, winblack));
			 
		 
				totalproblack[totblack] = $(".testtwo2").html();
				totblack<totalproblack.length; totblack++;
				var arrayOfBlack = totalproblack.map(Number);
				var profitnacrno = arrayOfBlack.reduce(function(total, num) { return total + num}
				, 0); 
				 $(".test4").html("Total" + " " + profitnacrno + " " + "$" + " " + "on BLACK");
				}
				}
				$("#second").empty();
				m = 0;
			
				console.log(false);
			}
			if (noviarray[0].includes("neparni") && noviarray[1].includes("neparni") 
				&& noviarray[2].includes("neparni") && noviarray[3].includes("neparni") && noviarray[4].includes("neparni")) {
				$("#row1div44").empty();
				s = (s + 1) % putadva.length;
		 
				$("#third").html(putadva[s]);
			
				console.log(true);
				var russia = putadva[s] * 2;
				finland[fin] = russia;
				fin<finland.length; fin++;
				var germany = putadva[s] * 1;
				greece[gre] = germany;
				gre<greece.length; gre++;
				var haiti = greece.reduce(function(total, num) { return total + num}
				, 0);
				console.log(haiti);
				$("#row1div33").html("Bet" + " " + haiti + " " + "$" + " " + "on EVEN");
			} else {
				
				var greeceland = greece;
				var gree = greece.reduce(function(total, num) { return total + num}
				, 0);

				greece.length = 0;
				var honduras = finland.slice(-1);
				var wineven = finland.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (finland.slice(-1).length > 0) {
				$("#row1div44").html("Win" + " " + finland.slice(-1) + " " + "$"+ " " + "on EVEN").fadeIn();
				
				var preven = profitEven(gree, wineven);
				 function profitEven(a, b) {return b - a;}
				 if (gree > 0) {
				var profieven = $(".testtwo3").html(profitEven(gree, wineven));
				totalproeven[toteven] = $(".testtwo3").html();
				toteven<totalproeven.length; toteven++;
				var arrayOfParno = totalproeven.map(Number);
				var profitnaparno = arrayOfParno.reduce(function(total, num) { return total + num}
				, 0); 
				 $(".test5").html("Total" + " " + profitnaparno + " " + "$" + " " + "on EVEN");
				}
				} 

				$("#third").empty();
				s = 0;
			
				console.log(false);
			}
			if (noviarray[0].includes("even") && noviarray[1].includes("even") 
				&& noviarray[2].includes("even") && noviarray[3].includes("even") && noviarray[4].includes("even")) {
				$("#row1div22").empty();
				f = (f + 1) % putadva.length;
		 
				$("#fourth").html(putadva[f]);
			 
				console.log(true);
				var belgium = putadva[f] * 2;
				burma[bur] = belgium;
				bur<burma.length; bur++;
				var china = putadva[f] * 1;
				chile[chi] = china;
				chi<chile.length; chi++;
				var colombia = chile.reduce(function(total, num) { return total + num}
				, 0);
				console.log(colombia);
				$("#row1div11").html("Bet" + " " + colombia + " " + "$" + " " + "on ODD");
			} else {
			 
				var chileland = chile;
				var chil = chile.reduce(function(total, num) { return total + num}
				, 0);


				chile.length = 0;
				var cuba = burma.slice(-1);
				var winodd = burma.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (burma.slice(-1).length > 0) {
				$("#row1div22").html("Win" + " " + burma.slice(-1) + " " + "$"+ " " + "on ODD").fadeIn();
				var prodd = profitOdd(chil, winodd);
				function profitOdd(a, b) {return b - a;}
				 if (chil > 0) {
				var profiodd = $(".testtwo4").html(profitOdd(chil, winodd));
				totalproodd[totodd] = $(".testtwo4").html();
				totodd<totalproodd.length; totodd++;
				var arrayOfneParno = totalproodd.map(Number);
				var profitnaneparno = arrayOfneParno.reduce(function(total, num) { return total + num}
				, 0); 
				$(".test6").html("Total" + " " + profitnaneparno + " " + "$" + " " + "on ODD");
				}
			}
				$("#fourth").empty();
				f = 0;
			 
				console.log(false);
			}
			 if (noviarray[0].includes("prvapo") && noviarray[1].includes("prvapo") 
				&& noviarray[2].includes("prvapo") && noviarray[3].includes("prvapo") && noviarray[4].includes("prvapo")) {
				$("#row1div444").empty();
				g = (g + 1) % putadva.length;
		 
				$("#fifth").html(putadva[g]);
			
				console.log(true);
				var hungary = putadva[g] * 2;
				iceland[ice] = hungary;
				ice<iceland.length; ice++;
				var iran = putadva[g] * 1;
				india[ind] = iran;
				ind<india.length; ind++;
				var japan = india.reduce(function(total, num) { return total + num}
				, 0);
				$("#row1div333").html("Bet" + " " + japan + " " + "$" + " " + "on 19-36");

			} else {
				var indus = india;
				var indu = india.reduce(function(total, num) { return total + num}
				, 0);

				india.length = 0;
				var jordan = iceland.slice(-1);
				var win1936 = iceland.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (iceland.slice(-1).length > 0) {
				$("#row1div444").html("Win" + " " + iceland.slice(-1) + " " + "$"+ " " + "on 19-36").fadeIn();
				var pr1936 = profit1936(indu, win1936);
				function profit1936(a, b) {return b - a;}
				 if (indu > 0) {
				var profi1936 = $(".testtwo5").html(profit1936(indu, win1936));
				totalpro1936[tot1936] = $(".testtwo5").html();
				tot1936<totalpro1936.length; tot1936++;
				var arrayOf2Pol = totalpro1936.map(Number);
				var profitnadrpol = arrayOf2Pol.reduce(function(total, num) { return total + num}
				, 0); 
				$(".test7").html("Total" + " " + profitnadrpol + " " + "$" + " " + "on 19-36");
				}
			}

				$("#fifth").empty();
				g = 0;
			
				console.log(false);
			}
			 if (noviarray[0].includes("drugap") && noviarray[1].includes("drugap") 
				&& noviarray[2].includes("drugap") && noviarray[3].includes("drugap") && noviarray[4].includes("drugap")) {
				$("#row1div2").empty();
				h = (h + 1) % putadva.length;
		 
				$("#sixth").html(putadva[h]);
				
				console.log(true);

				var country = putadva[h] * 2;
				america[ame] = country;
				ame<america.length; ame++;
				var canada = putadva[h] * 1;
				spain[spa] = canada;
				spa<spain.length; spa++;
				var turkey = spain.reduce(function(total, num) { return total + num}
				, 0);
				$("#row1div1").html("Bet" + " " + turkey + " " + "$" + " " + "on 1-18");

			} else {
				
				var spainland = spain;
				var spainla = spain.reduce(function(total, num) { return total + num}
				, 0);


				spain.length = 0;
				var australia = america.slice(-1);
				var win118 = america.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (america.slice(-1).length > 0) {
				$("#row1div2").html("Win" + " " + america.slice(-1) + " " + "$"+ " " + "on 1-18").fadeIn();
				
				var pr118 = profit118(spainla, win118);
				function profit118(a, b) {return b - a;}
				 if (spainla > 0) {
				var profi118 = $(".testtwo6").html(profit118(spainla, win118));
				totalpro118[tot118] = $(".testtwo6").html();
				tot118<totalpro118.length; tot118++;
				var arrayOf1Pol = totalpro118.map(Number);
				var profitnaprpol = arrayOf1Pol.reduce(function(total, num) { return total + num}
				, 0); 
				$(".test8").html("Total" + " " + profitnaprpol + " " + "$" + " " + "on 1-18");
				}
				}

				$("#sixth").empty();
				h = 0;
			
				console.log(false);

			}
			if (noviarray[0].includes("krug") && noviarray[1].includes("krug") && noviarray[2].includes("krug") 
				&& noviarray[3].includes("krug") && noviarray[4].includes("krug")) {
				$("#row1div8").empty();
				n = (n + 1) % putatri.length;
		 
				$("#seventh").html(putatri[n]);
				console.log(true);
				var italy = putatri[n] * 3;
				laos[lao] = italy;
				lao<laos.length; lao++;
				var malta = putatri[n] * 1;
				norway[nor] = malta;
				nor<norway.length; nor++;
				var sweden = norway.reduce(function(total, num) { return total + num}
				, 0);
				$("#row1div7").html("Bet" + " " + sweden + " " + "$" + " " + "on ROW 1");
			} else {
				var norland = norway;
				var norla = norway.reduce(function(total, num) { return total + num}
				, 0);


				norway.length = 0;
				var sudan = laos.slice(-1);
				var winrow1 = laos.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (laos.slice(-1).length > 0) {
				$("#row1div8").html("Win" + " " + laos.slice(-1) + " " + "$"+ " " + "on ROW 1").fadeIn();
				var prrow1 = profitRow1(norla, winrow1);
				function profitRow1(a, b) {return b - a;}
				 if (norla > 0) {
				var profirow1 = $(".testtwo7").html(profitRow1(norla, winrow1));
				totalprorow1[totrow1] =  $(".testtwo7").html();
				totrow1<totalprorow1.length; totrow1++;
				console.log(totalprorow1);
				var arrayOfRow1 = totalprorow1.map(Number);
	 
				var profitnarow1 = arrayOfRow1.reduce(function(total, num) { return total + num}
				, 0); 
				$(".test9").html("Total" + " " + profitnarow1 + " " + "$" + " " + "on ROW 1");
				}
				}
				$("#seventh").empty();
				n = 0;
				console.log(false);
			}
			if (noviarray[0].includes("kvadrat") && noviarray[1].includes("kvadrat") && noviarray[2].includes("kvadrat") 
				&& noviarray[3].includes("kvadrat") && noviarray[4].includes("kvadrat")) {
				$("#row1div88").empty();
				t = (t + 1) % putatri.length;
		 
				$("#eigth").html(putatri[t]);
				console.log(true);
				var senegal = putatri[t] * 3;
				singapore[sin] = senegal;
				sin<singapore.length; sin++;
				var slovakia = putatri[t] * 1;
				somalia[som] = slovakia;
				som<somalia.length; som++;
				var uganda = somalia.reduce(function(total, num) { return total + num}
				, 0);
				$("#row1div77").html("Bet" + " " + uganda + " " + "$" + " " + "on ROW 2");
			} else {
				var somland = somalia;
				var somla = somalia.reduce(function(total, num) { return total + num}
				, 0);
				somalia.length = 0;
				var ukraine = singapore.slice(-1);
				var winrow2 = singapore.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (singapore.slice(-1).length > 0) {
				$("#row1div88").html("Win" + " " + singapore.slice(-1) + " " + "$"+ " " + "on ROW 2").fadeIn();
				var prrow2 = profitRow2(somla, winrow2);
				function profitRow2(a, b) {return b - a;}
				 if (somla > 0) {
				var profirow2 = $(".testtwo8").html(profitRow2(somla, winrow2));
				totalprorow2[totrow2] =  $(".testtwo8").html();
				totrow2<totalprorow2.length; totrow2++;
				var arrayOfRow2 = totalprorow2.map(Number);
	 
				var profitnarow2 = arrayOfRow2.reduce(function(total, num) { return total + num}
				, 0); 
				 $(".test10").html("Total" + " " + profitnarow2 + " " + "$" + " " + "on ROW 2");
				}
				}
				$("#eigth").empty();
				t = 0;
				console.log(false);
			}
			if (noviarray[0].includes("romb") && noviarray[1].includes("romb") && noviarray[2].includes("romb") 
				&& noviarray[3].includes("romb") && noviarray[4].includes("romb")) {
				$("#row1div888").empty();
				v = (v + 1) % putatri.length;
		 
				$("#nineth").html(putatri[v]);
				console.log(true);
				var vietnam = putatri[v] * 3;
				zimbabve[zim] = vietnam;
				zim<zimbabve.length; zim++;
				var taiwan = putatri[v] * 1;
				yemen[yem] = taiwan;
				yem<yemen.length; yem++;
				var portugal = yemen.reduce(function(total, num) { return total + num}
				, 0);
				$("#row1div777").html("Bet" + " " + portugal + " " + "$" + " " + "on ROW 3");
			} else {
				var yemenland = yemen;
				var yemenla = yemen.reduce(function(total, num) { return total + num}
				, 0);

				yemen.length = 0;
				var venezuela = zimbabve.slice(-1);
				var winrow3 = zimbabve.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (zimbabve.slice(-1).length > 0) {
				$("#row1div888").html("Win" + " " + zimbabve.slice(-1) + " " + "$"+ " " + "on ROW 3").fadeIn();
				prrow3 = profitRow3(yemenla, winrow3);
				function profitRow3(a, b) {return b - a;}
				 if (yemenla > 0) {
				var profirow3 = $(".testtwo9").html(profitRow3(yemenla, winrow3));
				totalprorow3[totrow3] =  $(".testtwo9").html();
				totrow3<totalprorow3.length; totrow3++;
				var arrayOfRow3 = totalprorow3.map(Number);
	 
				var profitnarow3 = arrayOfRow3.reduce(function(total, num) { return total + num}
				, 0); 
				 $(".test11").html("Total" + " " + profitnarow3 + " " + "$" + " " + "on ROW 3");
			}
				}
				$("#nineth").empty();
				v = 0;
				console.log(false);
			}
			if (noviarray[0].includes("zec") && noviarray[1].includes("zec") && noviarray[2].includes("zec") 
				&& noviarray[3].includes("zec") && noviarray[4].includes("zec")) {
				$("#row1div6").empty();
				q = (q + 1) % putatri.length;
		 
				$("#tenth").html(putatri[q]);
				console.log(true);
				var zambia = putatri[q] * 3;
				poland[pol] = zambia;
				pol<poland.length; pol++;
				var pakistan = putatri[q] * 1;
				niger[nig] = pakistan;
				nig<niger.length; nig++;
				var nepal = niger.reduce(function(total, num) { return total + num}
				, 0);
			 $("#row1div5").html("Bet" + " " + nepal + " " + "$" + " " + "on 1st12");
			} else {
				var nigerland = niger;
				var nigerla = niger.reduce(function(total, num) { return total + num}
				, 0);

				niger.length = 0;
				var mongolia = poland.slice(-1);
				var win1st12 = poland.slice(-1).reduce(function(total, num) { return total + num}
				, 0);

				if (poland.slice(-1).length > 0) {
				$("#row1div6").html("Win" + " " + poland.slice(-1) + " " + "$"+ " " + "on 1st12").fadeIn();
				pr1st12 = profitFirst12(nigerla, win1st12);
				function profitFirst12(a, b) {return b - a;}
				 if (nigerla > 0) {
				var profi1st12 = $(".testtwo10").html(profitFirst12(nigerla, win1st12));
				totalpro1st12[tot1st12] =  $(".testtwo10").html();
				tot1st12<totalpro1st12.length; tot1st12++;
				var arrayOf1st12 = totalpro1st12.map(Number);
	 
				var profitna1st12 = arrayOf1st12.reduce(function(total, num) { return total + num}
				, 0); 
				$(".test12").html("Total" + " " + profitna1st12 + " " + "$" + " " + "on 1st12");
			}
				}
				$("#tenth").empty();
				q = 0;
				console.log(false);
			}
			if (noviarray[0].includes("pas") && noviarray[1].includes("pas") && noviarray[2].includes("pas") 
				&& noviarray[3].includes("pas") && noviarray[4].includes("pas")) {
				$("#row1div66").empty();
				u = (u + 1) % putatri.length;
		 
				$("#eleventh").html(putatri[u]);
				console.log(true);
				var jamaica = putatri[u] * 3;
				liban[lib] = jamaica;
				lib<liban.length; lib++;
				var gabon = putatri[u] * 1;
				latvia[lat] = gabon;
				lat<latvia.length; lat++;
				var georgia = latvia.reduce(function(total, num) { return total + num}
				, 0);
			 $("#row1div55").html("Bet" + " " + georgia + " " + "$" + " " + "on 2st12");
			} else {
				var latvialand = latvia;
				var latla = latvia.reduce(function(total, num) { return total + num}
				, 0);

				latvia.length = 0;
				var switzerland = liban.slice(-1);
				var win2nd12 = liban.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (liban.slice(-1).length > 0) {
				$("#row1div66").html("Win" + " " + liban.slice(-1) + " " + "$"+ " " + "on 2nd12").fadeIn();
				pr2nd12 = profitSecond12(latla, win2nd12);
				function profitSecond12(a, b) {return b - a;}
				 if (latla > 0) {
				var profi2nd12 = $(".testtwo11").html(profitSecond12(latla, win2nd12));
				totalpro2nd12[tot2nd12] =  $(".testtwo11").html();
				tot2nd12<totalpro2nd12.length; tot2nd12++;
				var arrayOf2nd12 = totalpro2nd12.map(Number);
	 
				var profitna2nd12 = arrayOf2nd12.reduce(function(total, num) { return total + num}
				, 0); 
				 $(".test13").html("Total" + " " + profitna2nd12 + " " + "$" + " " + "on 2nd12");
			}
				}
				$("#eleventh").empty();
				u = 0;
				console.log(false);
			}
			if (noviarray[0].includes("maca") && noviarray[1].includes("maca") && noviarray[2].includes("maca") 
				&& noviarray[3].includes("maca") && noviarray[4].includes("maca")) {
				$("#row1div666").empty();
				w = (w + 1) % putatri.length;
		 
				$("#twelveth").html(putatri[w]);
				console.log(true);
				var syria = putatri[w] * 3;
				mexico[mex] = syria;
				mex<mexico.length; mex++;
				var uruguay = putatri[w] * 1;
				ghana[gha] = uruguay;
				gha<ghana.length; gha++;
				var moze = ghana.reduce(function(total, num) { return total + num}
				, 0);
				$("#row1div555").html("Bet" + " " + moze + " " + "$" + " " + "on 3st12");
			} else {
				var ghanaland = ghana;
				var ganla = ghana.reduce(function(total, num) { return total + num}
				, 0);

				ghana.length = 0;
				var pare = mexico.slice(-1);
				var win3rd12 = mexico.slice(-1).reduce(function(total, num) { return total + num}
				, 0);
				if (mexico.slice(-1).length > 0) {
				$("#row1div666").html("Win" + " " + mexico.slice(-1) + " " + "$"+ " " + "on 3st12").fadeIn();
				pr3rd12 = profitThird12(ganla, win3rd12);
				function profitThird12(a, b) {return b - a;}
				 if (ganla > 0) {
				var profi3rd12 = $(".testtwo12").html(profitThird12(ganla, win3rd12));
				totalpro3rd12[tot3rd12] =  $(".testtwo12").html();
				tot3rd12<totalpro3rd12.length; tot3rd12++;
				var arrayOf3rd12 = totalpro3rd12.map(Number);
	 
				var profitna3rd12 = arrayOf3rd12.reduce(function(total, num) { return total + num}
				, 0); 
				$(".test14").html("Total" + " " + profitna3rd12 + " " + "$" + " " + "on 3rd12");
			}
				}
				$("#twelveth").empty();
				w = 0;
				console.log(false);
			}
				console.log(noviarray);
      if (h>0 || f>0|| d>0 || n>0 || q>0) {
        $('.sto .trireda').find('#btn1, #btn7').css({background: 'white', borderRadius: '15px'});
      } 
      if (h>0 || s>0 || m>0 || t>0 || q>0) {
        $('.sto .trireda').find('#btn2, #btn8').css({background: 'white', borderRadius: '15px'});
      }
    
      if (h>0 || f>0 || d>0 || q>0 || v>0) {
        $('.sto .trireda').find('#btn3, #btn9').css('background', 'white');
      }
      if (h>0 || s>0 || m>0 || n>0 || q>0) {
        $('.sto .trireda').find('#btn4, #btn10').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || f>0 || d>0 || t>0 || q>0) {
        $('.sto .trireda').find('#btn5').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || f>0 || m>0 || t>0 || q>0) {
        $('.sto .trireda').find('#btn11').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || s>0 || m>0 || v>0 || q>0) {
        $('.sto .trireda').find('#btn6').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || s>0 || d>0 || v>0 || q>0) {
        $('.sto .trireda').find('#btn12').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || f>0 || m>0 || n>0 || u>0) {
        $('.sto .trireda').find('#btn13').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || s>0 || d>0 || t>0 || u>0) {
        $('.sto .trireda').find('#btn14').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || f>0 || m>0 || v>0 || u>0) {
        $('.sto .trireda').find('#btn15').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || s>0 || d>0 || n>0 || u>0) {
        $('.sto .trireda').find('#btn16').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || f>0 || m>0 || t>0 || u>0) {
        $('.sto .trireda').find('#btn17').css({background: 'white', borderRadius: '15px'});
      }
      if (h>0 || s>0 || d>0 || v>0 || u>0) {
        $('.sto .trireda').find('#btn18').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || d>0 || n>0 || u>0) {
        $('.sto .trireda').find('#btn19').css({background: 'white', borderRadius: '15px'});
      } 
      if (g>0 || s>0 || m>0 || t>0 || u>0) {
        $('.sto .trireda').find('#btn20').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || d>0 || v>0 || u>0) {
        $('.sto .trireda').find('#btn21').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || m>0 || n>0 || u>0) {
        $('.sto .trireda').find('#btn22').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || d>0 || t>0 || u>0) {
        $('.sto .trireda').find('#btn23').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || m>0 || v>0 || u>0) {
        $('.sto .trireda').find('#btn24').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || d>0 || n>0 || w>0) {
        $('.sto .trireda').find('#btn25').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || m>0 || t>0 || w>0) {
        $('.sto .trireda').find('#btn26').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || d>0 || v>0 || w>0) {
        $('.sto .trireda').find('#btn27').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || m>0 || n>0 || w>0) {
        $('.sto .trireda').find('#btn28').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || m>0 || t>0 || w>0) {
        $('.sto .trireda').find('#btn29, #btn35').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || d>0 || v>0 || w>0) {
        $('.sto .trireda').find('#btn30, #btn36').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || m>0 || n>0 || w>0) {
        $('.sto .trireda').find('#btn31').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || d>0 || t>0 || w>0) {
        $('.sto .trireda').find('#btn32').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || f>0 || m>0 || v>0 || w>0) {
        $('.sto .trireda').find('#btn33').css({background: 'white', borderRadius: '15px'});
      }
      if (g>0 || s>0 || d>0 || n>0 || w>0) {
        $('.sto .trireda').find('#btn34').css({background: 'white', borderRadius: '15px'});
      }
   

        var joinred = totalprored.join()

        var joinblack = totalproblack.join();
        var joineven = totalproeven.join();
        var joinodd = totalproodd.join();
        var join1936 = totalpro1936.join();
        var join118 = totalpro118.join();
        var joinrow1 = totalprorow1.join();
        var joinrow2 = totalprorow2.join();
        var joinrow3 = totalprorow3.join();
        var join1st12 = totalpro1st12.join();
        var join2nd12 = totalpro2nd12.join();
        var join3rd12 = totalpro3rd12.join();


        var ukupanProfit = [joinred, joinblack, joineven, joinodd, join1936, join118, joinrow1, joinrow2, joinrow3, join1st12, join2nd12, join3rd12];
        var myFlatArray = ukupanProfit.toString().split(',').map(function(e) { return parseInt(e) || 0; });
        console.log(myFlatArray);
        var profitsav = myFlatArray.reduce(function(total, num) { return total + num}
        , 0);
        $("#profit").html("Your total profit is" + " " + profitsav + " " + "$ .");
      }
       $("#textbox2").scrollLeft($('#textbox2').scrollLeft() + 37); 
    }); 
// Get the <span> element that closes the modal

 var span = document.getElementById("closeprofit")[0];

//When the user clicks on the button, open the modal 
$("#lookprofit").click (function() {
  //modal.style.display = "block";
  $('#mymodal').removeClass("hidden");
  window.scrollBy(0, 260);
});

//When the user clicks on <span> (x), close the modal
$("span").click (function() {
  //modal.style.display = "none";
  $('#mymodal').addClass("hidden");
});

var span = document.getElementById("closeprofit1")[0];

//When the user clicks on the button, open the modal 
$("#hotnumbers").click (function() {
//modal.style.display = "block";
$('#mymodal1').removeClass("hidden");
window.scrollBy(0, 400);
});

//When the user clicks on <span> (x), close the modal
$("span").click (function() {
//modal.style.display = "none";
$('#mymodal1').addClass("hidden");
});










