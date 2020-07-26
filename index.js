
$('form#myForm').submit(function(){
    var name = $('#name').val();
    var pass = $('#email').val();
    var text = $('#mess').val();
    alert("Hi! We have received your message and we will get in touch. Thank you for contacting us.");
  });

$("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
});