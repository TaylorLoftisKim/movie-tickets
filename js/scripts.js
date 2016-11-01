//business logic
function Ticket(title, time, age) {
debugger;
  this.newTitle = title;
  this.newTime = time;
  this.newAge = age;
  this.Price = 0;
}


Ticket.prototype.fullInfo = function() {
debugger;
  return this.newTitle + " - " + this.newTime + " - " + this.newAge;
}

Ticket.prototype.calculatePrice = function(newInfo) {
debugger
var price = 0;

  if (this.newTitle === "Star Wars" ) {
    price += 8;
  }
   else {
    price += 5;
  }

  if (this.newTime === "Morning") {
    price += 2;
  }
    else {
      price += 5;
    }

    if (this.newAge === "Child") {
      price += 0;
    }
      else if (this.newAge === "Adult") {
        price += 3;
      }
      else {
        price += -1;
      }

  return price;
}


//user logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
  var inputTitle = $("select#title").val();
  var inputTimeOfDay = $("select#timeOfDay").val();
  var inputAge = $("select#age").val();
  var newInfo = new Ticket(inputTitle,inputTimeOfDay,inputAge);

  newInfo.price = newInfo.calculatePrice(newInfo);

  $("#output").show();
  $("#outputJumbo").show();
  $("h3#confirm").show();
  $("p#output").append("<li><span class='output'>" + newInfo.fullInfo() + "</span></li>");

  $("input#title").val("");
  $("input#timeOfDay").val("");
  $("input#age").val("");
  $(".output").last().click(function() {
    $("#show-movie").show();
    $("#show-movie h2").text("Details");
    $(".new-title").text(newInfo.newTitle);
    $(".new-timeOfDay").text(newInfo.newTime);
    $(".new-age").text(newInfo.newAge);
    $(".price").text(newInfo.price);
    });
  });
});
