function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var ros = new ROSLIB.Ros({
  url : 'ws://192.168.50.133:9090'
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


function orientationPublisher(boolean){
  var triggerPub1 = new ROSLIB.Topic({
    ros : ros,
    name : '/orientation_constraint',
    messageType : 'std_msgs/Bool',
  });
  var bool = new ROSLIB.Message({data : boolean});
  triggerPub1.publish(bool);
}


function heightPublisher(boolean){
  var triggerPub1 = new ROSLIB.Topic({
    ros : ros,
    name : '/height_constraint',
    messageType : 'std_msgs/Bool',
  });
  var bool = new ROSLIB.Message({data : boolean});
  triggerPub1.publish(bool);
}

function overUnderPublisher(boolean){
  var triggerPub1 = new ROSLIB.Topic({
    ros : ros,
    name : '/over_under_constraint',
    messageType : 'std_msgs/Bool',
  });
  var bool = new ROSLIB.Message({data : boolean});
  triggerPub1.publish(bool);
}

function perimeterPublisher(boolean){
  var triggerPub1 = new ROSLIB.Topic({
    ros : ros,
    name : '/perimeter_constraint',
    messageType : 'std_msgs/Bool',
  });
  var bool = new ROSLIB.Message({data : boolean});
  triggerPub1.publish(bool);
}



$(document).ready(function() {
    orientationPublisher(false);
    heightPublisher(false);
    overUnderPublisher(false);
    perimeterPublisher(false);
    console.log("Initialized all publishers to false");

    var listener1 = new ROSLIB.Topic({
      ros : ros,
      name : '/cairo_lfd/valid_constraints',
      messageType : 'std_msgs/Int16MultiArray',
      throttle_rate : 2000
    });

    listener1.subscribe(function(message) {
      console.log(message);
      console.log(message.includes('1'));
      if (message.includes('1')){
        $('#card-orientation').find('h5').removeClass('bg-danger').addClass('bg-success')
      } else {
        $('#card-orientation').find('h5').removeClass('bg-success').addClass('bg-danger')
      }
      if (message.includes('2')){
        $('#card-height').find('h5').removeClass('bg-danger').addClass('bg-success')
      } else {
        $('#card-height').find('h5').removeClass('bg-success').addClass('bg-danger')
      }
      if (message.includes(1)){
        $('#card-over-under').find('h5').removeClass('bg-danger').addClass('bg-success')
      } else {
        $('#card-over-under').find('h5').removeClass('bg-success').addClass('bg-danger')
      }
      if (message.includes(1)){
        $('#card-perimeter').find('h5').removeClass('bg-danger').addClass('bg-success')
      } else {
        $('#card-perimeter').find('h5').removeClass('bg-success').addClass('bg-danger')
      }
    });

    $('input[id=toggle1]').change(function() {
        if ($('input[id="toggle1"]').prop('checked') == true){
            orientationPublisher(true);
        }
        if ($('input[id="toggle1"]').prop('checked') == false){
            orientationPublisher(false);
        }
    });
    $('input[id=toggle2]').change(function() {
        if ($('input[id="toggle2"]').prop('checked') == true){
            heightPublisher(true);
          }
        if ($('input[id="toggle2"]').prop('checked') == false){
            heightPublisher(false);
          }
    });
    $('input[id=toggle3]').change(function() {
        if ($('input[id="toggle3"]').prop('checked') == true){
          overUnderPublisher(true);
        }
        if ($('input[id="toggle3"]').prop('checked') == false){
          overUnderPublisher(false);
        }
    });
    $('input[id=toggle4]').change(function() {
      if ($('input[id="toggle4"]').prop('checked') == true){
          perimeterPublisher(true);
        }
      if ($('input[id="toggle4"]').prop('checked') == false){
          perimeterPublisher(false);
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