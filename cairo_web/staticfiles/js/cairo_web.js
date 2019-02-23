function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


$(document).ready(function() {
    $('input[id=toggle1]').change(function() {
        if ($('input[id="toggle1"]').prop('checked') == true){
          alert("Sending Upright Active data!")    
          }
        if ($('input[id="toggle1"]').prop('checked') == false){
          alert("No longer sending Upright Active data!")    
          }
    });
    $('input[id=toggle2]').change(function() {
        if ($('input[id="toggle2"]').prop('checked') == true){
          alert("Sending Height Active  data!")    
          }
        if ($('input[id="toggle2"]').prop('checked') == false){
          alert("No longer sending Height Active data!")    
          }
    });
    $('input[id=toggle3]').change(function() {
        if ($('input[id="toggle3"]').prop('checked') == true){
          alert("Sending Perimeter Active data!")    
          }
        if ($('input[id="toggle3"]').prop('checked') == false){
          alert("No longer sending Perimeter Active data!")    
          }
    });
     $('button[id=button1]').click(function() {
        $(this).attr('active', true);
        alert("Skill Segment Marked!");
        sleep(1000).then(() => {
            $('button[id=button1]').blur();
          });
    });
    $('button[id=button2]').click(function() {
       $(this).attr('active', true);
        alert("Pouring Event Triggered!");
        sleep(1000).then(() => {
            $('button[id=button2]').blur();
          });
    });
     $('button[id=button3]').click(function() {
        $(this).attr('active', true);
        alert("Pick and Place Triggered!");
        sleep(1000).then(() => {
            $('button[id=button3]').blur();
          });
    });
});