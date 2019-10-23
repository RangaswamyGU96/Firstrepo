$(document).ready(function() {
  $("#showandhide").on({
    click: function() {
      $("#Aboutparagraph").toggleClass("hide");
      // $("div").animate({ left: "250px" });
    }
  });

  $("#Aboutparagraph").on({
    mouseenter: function() {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function() {
      $(this).css("background-color", "lightblue");
    }
  });
  $("#letsdosomething").click(function() {
    // var i = 1;
    // var div = $("div");
    // do {
    //   div.animate({ height: "300px", opacity: "0.4" }, "slow");
    //   div.animate({ width: "300px", opacity: "0.8" }, "slow");
    //   div.animate({ height: "100px", opacity: "0.4" }, "slow");
    //   div.animate({ width: "100px", opacity: "0.8" }, "slow");
    //   i++;
    // } while (i === 10);

    // to create elements and append to body
    var txt1 = "<p>Text.</p>"; // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");
    var text = document.createElement("p");
    text.innerHTML = "Hello world!";
    $("body").append(text, txt1, txt2);
  });
});
