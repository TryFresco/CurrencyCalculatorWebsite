let orgCurrency;
let toCurrency;
let value;
var reusult = 0;

$(document).ready(function() {
    $("#day").click(function() {
        day = true;
        evening = false;
        $("#zeit").text("Tag");

    });
});



$(document).ready(function() {
    $("#evening").click(function() {
        day = false;
        evening = true;
        $("#zeit").text("Abend");


    });
});



$(document).ready(function() {
    $(".calculateButton").click(function() {

        let endpoint = 'https://v6.exchangerate-api.com/v6/6f8acda6405b37ec9f579cee'
        let apiKey = '6f8acda6405b37ec9f579cee'

        orgCurrency = $(".originCurrency").val().toUpperCase();
        toCurrency = $(".destCurrency").val().toUpperCase();
        value = $(".amountInput").val();


        var request = new XMLHttpRequest();

        request.open("GET", endpoint + "/latest/" + orgCurrency, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(this.response);
                // do stuff with data
                console.log(data);

                $.each(data.conversion_rates, function(key, val) {
                    var number = val;
                    if (key == toCurrency) {
                        reusult = number * value;
                        console.log("reusultat: " + reusult);
                        $(".amountInput").val(reusult);
                    } else {}
                })


            }

        };

        request.send();


    });
});