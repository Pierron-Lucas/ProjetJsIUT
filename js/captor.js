(function (){
    function getRandomArbitrary(min, max){
        return Math.floor(Math.random() * (min - max) + min);
    }

    var A_temperature = [];
    for (var i = 20; i > 0; --i){
        var x = getRandomArbitrary(-15, 60);
        A_temperature.push(x);
    }

    console.log(A_temperature);
    }
)