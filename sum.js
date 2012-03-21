var first, second, answer;

function getRandomNumber(){
  return Math.round(Math.random(12) * 10);
};

function getRandomSymbol(){
  var val = getRandomNumber();

  switch(true){
    case (val < 4):
      return "+";
      break;
    case (val >= 4 && val < 6):
      return "*";
      break;
    case (val >= 6 && val < 8):
      return "/";
      break;
    default:
      return "-";
      break;
  }
}

function setup(){
  $("#answer").focus();
  first = getRandomNumber();
  second = getRandomNumber();
  type = getRandomSymbol();
  answer = eval(first + type + second);
  if(answer < 0 || answer % 1 != 0 ){
    setup();
  }
  $("#left").html(first);
  $("#type").html(type);
  $("#right").html(second);
}

function flash(right_wrong){
  $("#answer").val("");
  var right = right_wrong == "right" ? "right" : "wrong";
  var wrong = right_wrong == "right" ? "wrong" : "right";
  $("." + wrong).hide();
  $("." + right).show();
  $("." + right).fadeOut(1000);
  setup();
}