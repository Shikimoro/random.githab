
$('#button_chislo').click(function(){	
	let chislo = Number( document.getElementById("selector").value );
    $.get('http://numbersapi.com/'+chislo+'/trivia?notfound=floor&fragment', function(data) {
        $('#number').text(chislo+" "+data);
         console.log(data);
    });
});

$('#button_random_pustak').click(function(){	
	
    $.get('http://numbersapi.com/random/trivia?notfound=floor&fragment', function(data) {
        $('#number').text(data);
         console.log(data);
    });
});

$('#button_random_year').click(function(){	
    $.get('http://numbersapi.com/random/year?notfound=floor&fragment', function(data) {
        $('#number').text(data);
         console.log(data);
    });
});

$('#button_random_data').click(function(){	
    $.get('http://numbersapi.com/random/date?notfound=floor&fragment', function(data) {
        $('#number').text(data);
         console.log(data);
    });
});

$('#button_random_math').click(function(){	
    $.get('http://numbersapi.com/random/math?notfound=floor&fragment', function(data) {
        $('#number').text(data);
         console.log(data);
    });
});
