$(document).ready(function() {
    if (annyang) {
        console.log("We got annyang gee")
        // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
            'upright on': function() {
              if ($('input[id="toggle1"]').prop('checked') == false){
                $('input[id="toggle1"]').prop('checked', true).trigger('change');
              };
            },
            'upright off': function() {
              if ($('input[id="toggle1"]').prop('checked') == true){
                $('input[id="toggle1"]').prop('checked', false).trigger('change');
              };
            },
            'height on': function() {
              if ($('input[id="toggle2"]').prop('checked') == false){
                $('input[id="toggle2"]').prop('checked', true).trigger('change');
              };
            },
            'height off': function() {
              if ($('input[id="toggle2"]').prop('checked') == true){
                $('input[id="toggle2"]').prop('checked', false).trigger('change');
              };
            },
            'perimeter on': function() {
              if ($('input[id="toggle3"]').prop('checked') == false){
                $('input[id="toggle3"]').prop('checked', true).trigger('change');
              };
            },
            'perimeter off': function() {
              if ($('input[id="toggle3"]').prop('checked') == true){
                $('input[id="toggle3"]').prop('checked', false).trigger('change');
              };
            },
            'segment': function() {
              $('button[id="button1"]').click(() =>{
                $('button[id="button1"]').attr('active', true)
              });
            },
            'pour': function() {
              $('button[id="button2"]').click();
            },
            'poor': function() {
              $('button[id="button2"]').click();
            },
            'pick and place': function() {
              $('button[id="button3"]').click();
            }
        };
        // Add our commands to annyang
        annyang.addCommands(commands);
        annyang.debug()
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start({ continuous: false });
    }
});