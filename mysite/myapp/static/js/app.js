//$(document).foundation()
$(document).ready(function () {
    var player = 1;
    var winner = 0;
    var colors = {};
    colors[-1] = "yellow";
    colors[1] = "red";
    var count = 0;

    $(".cell").each(function () {
        $(this).attr("id", count);
        $(this).attr("data-player", 0);
        count++;

        $(this).click(function () {
            if (valid($(this).attr("id"))) {
                $(this).css("background-color", colors[player]);
                $(this).attr("data-player", player);
                if (checkwin(player)) {
                    alert(colors[player] + " has won")
                    winner = player;
                }
                player *= -1;
            }
        });
    });

    function valid(x) {
        var id = parseInt(x);

        if (winner !== 0) {
            return false;
        }

        if ($("#" + id).attr("data-player") === "0") {
            if (id >= 35) {
                return true;
            }
            if ($("#" + (id + 7)).attr("data-player") !== "0") {
                return true;
            }
        }
        return false;
    }

    function checkwin(L) {
        var chain = 0;
        for (var i = 0; i < 42; i += 7) { //checks the rows for 4 in a row
            for (var j = 0; j < 7; j++) {
                var cell = ("#" + (i + j));
                if (cell.attr("data-player") == L) {
                    chain++;
                }
                else {
                    chain = 0;
                }

                if (chain >= 4) {
                    return true;
                }
            }
            chain = 0;
        }

        chain = 0;
        for (var i = 0; i < 7; i++) { //checks the columns for 4 in a row
            for (var j = 0; j < 42; j += 7) {
                var cell = $("#" + (i + j));
                if (cell.attr("data-player") == L) {
                    chain++;
                }
                else {
                    chain = 0;
                }

                if (chain >= 4) {
                    return true;
                }
            }
            chain = 0;
        }
        return false;
    }
});