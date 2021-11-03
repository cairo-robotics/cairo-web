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
          $('#card-orientation-1').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-orientation-1').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(2)){
          $('#card-over-under-2').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        } else {
          $('#card-over-under-2').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        }
        if (message.data.includes(3)){
            $('#card-planar-3').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
          } else {
            $('#card-planar-3').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
          }
       
        // PEG IN HOLE TASK
        // if (message.data.includes(4)){
        //   $('#ccard-orientation-4').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        // } else {
        //   $('#card-orientation-4').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        // }
        // if (message.data.includes(5)){
        //   $('#card-over-under-5').find('h5').removeClass('bg-danger').addClass('bg-success').addClass('text-white')
        // } else {
        //   $('#card-over-under-5').find('h5').removeClass('bg-success').addClass('bg-danger').addClass('text-white')
        // }


     
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
    //   $('input[id=toggle4]').change(function() {
    //       var constraint_id = 4;
    //       if ($('input[id="toggle4"]').prop('checked') == true){
    //           applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
    //           appliedConstraintsPublisher(applied_constraints);
    //       }
    //       if ($('input[id="toggle4"]').prop('checked') == false){
    //           applied_constraints = applied_constraints.filter(e => e !== constraint_id)
    //           appliedConstraintsPublisher(applied_constraints);
    //       }
    //   });
    //   $('input[id=toggle5]').change(function() {
    //       var constraint_id = 5;
    //       if ($('input[id="toggle5"]').prop('checked') == true){
    //           applied_constraints.indexOf(constraint_id) === -1 ? applied_constraints.push(constraint_id) : console.log("This item already exists");
    //           appliedConstraintsPublisher(applied_constraints);
    //       }
    //       if ($('input[id="toggle5"]').prop('checked') == false){
    //           applied_constraints = applied_constraints.filter(e => e !== constraint_id)
    //           appliedConstraintsPublisher(applied_constraints);
    //       }
    //   });

     
  });