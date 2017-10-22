// lets code the calc
$(document).ready(function () {
  oper=["+","-","*","÷","%"];
  var x="";
  var oper2=["btnAC","btnC","btnEqual"];
  function Calculator(){
    // x="";
    this.append=function(arg) {
      if(oper.includes(arg))
      {
        if(x=="")
        {
          console.log("Please enter a number first to start the calculation");
        }
        else {
          var s=" "+arg+" ";
          x +=s;
        }
      }
      else {
        x+=arg;
      }
    };
    this.updatescreen=function(screen){
      $('#calc_screen').html(screen);
    };
  }

  c = new Calculator();
  $(document).on('click', 'button', function(event){
    if(!oper2.includes(this.id))
    {
    var $button = $(this);
    c.append($button.text());
    console.log($button.text());
    c.updatescreen(x);
  }
  });
  $( "#btnAC" ).click(function() {
    x="";
    c.updatescreen(x);
});
$( "#btnC" ).click(function() {
  if(x!=""){
  x=x.slice(0, -1);
  c.updatescreen(x);}
});
$( "#btnEqual" ).click(function() {
  x=x.replace('x','*');
  x=x.replace('÷','/');
  x=math.eval(x);
  c.updatescreen(x);
});
});
