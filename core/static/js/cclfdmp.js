function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  var ros = new ROSLIB.Ros({
    url : ROSBRIDGE_ADDRESS
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
  
  var applied_constraints = []
  
  function appliedConstraintsPublisher(int_array){
    var triggerPub = new ROSLIB.Topic({
      ros : ros,
      name : 'cairo_lfd/triggered_constraints',
      messageType : 'std_msgs/Int8MultiArray',
    });
    var msg = new ROSLIB.Message({data : int_array});
    triggerPub.publish(msg);
  }
  
  
  $(document).ready(function() {
  
      var listener1 = new ROSLIB.Topic({
        ros : ros,
        name : 'cairo_lfd/valid_constraints',
        messageType : 'std_msgs/Int8MultiArray',
        throttle_rate : 2000
      });
  
      listener1.subscribe(function(message) {
        console.log(message);
        // POURING TASK
        if (message.data.includes(1)){
          $('#card-planar-1').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-1').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(2)){
          $('#card-orientation-2').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-orientation-2').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(3)){
          $('#card-over-under-3').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-over-under-3').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }

        // PEG IN HOLE TASK
        if (message.data.includes(4)){
          $('#ccard-orientation-4').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-orientation-4').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(5)){
          $('#card-over-under-5').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-over-under-5').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }


        // GLUE TASK

        if (message.data.includes(6)){
          $('#card-orientation-6').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-orientation-6').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(7)){
          $('#card-planar-7').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-7').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(8)){
          $('#card-planar-8').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-8').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
         if (message.data.includes(9)){
          $('#card-orientation-9').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-orientation-9').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(10)){
          $('#card-planar-10').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-10').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(11)){
          $('#card-planar-11').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-11').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(12)){
          $('#card-planar-12').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-12').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(13)){
          $('#card-planar-13').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-planar-13').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
      });
  
      appliedConstraintsPublisher(applied_constraints);
      console.log("Initialized applied constraint publishers to false");
      
      // POURING TASK
      $('input[id=toggle1]').change(function() {
          var constraint_id = 1;
          if ($('input[id="toggle1"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle1"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle2]').change(function() {
          var constraint_id = 2;
          if ($('input[id="toggle2"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle2"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle3]').change(function() {
          var constraint_id = 3;
          if ($('input[id="toggle3"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle3"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });

      // PEG IN HOLE TASK
      $('input[id=toggle4]').change(function() {
          var constraint_id = 4;
          if ($('input[id="toggle4"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle4"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle5]').change(function() {
          var constraint_id = 5;
          if ($('input[id="toggle5"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle5"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });

      // GLUE TASK
      $('input[id=toggle6]').change(function() {
          var constraint_id = 6;
          if ($('input[id="toggle6"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle6"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle7]').change(function() {
          var constraint_id = 7;
          if ($('input[id="toggle7"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle7"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle8]').change(function() {
          var constraint_id = 8;
          if ($('input[id="toggle8"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle8"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle9]').change(function() {
          var constraint_id = 9;
          if ($('input[id="toggle9"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle9"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle10]').change(function() {
          var constraint_id = 10;
          if ($('input[id="toggle10"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle10"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle11]').change(function() {
          var constraint_id = 11;
          if ($('input[id="toggle11"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle11"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle12]').change(function() {
          var constraint_id = 12;
          if ($('input[id="toggle12"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle12"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
      });
      $('input[id=toggle13]').change(function() {
          var constraint_id = 13;
          if ($('input[id="toggle13"]').prop('checked') == true){
              applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
              appliedConstraintsPublisher(applied_constraints);
          }
          if ($('input[id="toggle13"]').prop('checked') == false){
              applied_constraints = applied_constraints.filter(e => e !== constraint_id)
              appliedConstraintsPublisher(applied_constraints);
          }
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