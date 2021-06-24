let $redpill = $(".red-pill");

$redpill.on("onmouseover", function () {
    $redpill.get(0).play();
});

$redpill.on("mouseout", function () {
    $redpill.get(0).pause();
});
