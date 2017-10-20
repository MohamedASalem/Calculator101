// lets code the calc
$(document).ready(function () {
  oper=["+","-","*","/","%"];
  function Calculator(){
    this.main="";
    this.append=function(arg) {
      if(this.main!=="")
      {
        if(jquery.$.inArray(arg, oper)!=-1)
        {
          this.main += arg;
        }
        else {
          console.log("Please enter a number first to start the calculation");
        }
      }
      else {
        this.main += arg;
      }
    };
  }

  c = new Calculator();
  $(document).on('click', 'button', function(event){
    var $button = $(this);
    c.append($button.text());
    console.log($button.text());
  });
});
