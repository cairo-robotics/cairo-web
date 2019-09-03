function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
  console.log('Connection to websocket server closed.');
});

$(document).ready(function() {
    $('input[id=toggle1]').change(function() {
        if ($('input[id="toggle1"]').prop('checked') == true){
            var triggerPub1 = new ROSLIB.Topic({
              ros : ros,
              name : '/mock_trigger_1',
              messageType : 'std_msgs/Bool',
            });
            var bool = new ROSLIB.Message({data : true});
            triggerPub1.publish(bool);
        }
        if ($('input[id="toggle1"]').prop('checked') == false){
            var triggerPub1 = new ROSLIB.Topic({
              ros : ros,
              name : '/mock_trigger_1',
              messageType : 'std_msgs/Bool',
            });
            var bool = new ROSLIB.Message({data : false});
            triggerPub1.publish(bool); 
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