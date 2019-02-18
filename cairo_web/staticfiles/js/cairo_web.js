// Connecting to ROS
  // -----------------

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:8080'
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

// Publishing a Topic
// ------------------

var triggerPub = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_web_test',
  messageType : 'std_msgs/Bool'
});

var trigger = new ROSLIB.Message({data : true});
console.log(trigger)
triggerPub.subscribe(function(){
  console.log("Published!")
})
triggerPub.publish(trigger);

// Subscribing to a Topic
// ----------------------

// var listener = new ROSLIB.Topic({
//   ros : ros,
//   name : '/listener',
//   messageType : 'std_msgs/String'
// });

// listener.subscribe(function(message) {
//   console.log('Received message on ' + listener.name + ': ' + message.data);
//   listener.unsubscribe();
// });

// Calling a service
// -----------------

// var addTwoIntsClient = new ROSLIB.Service({
//   ros : ros,
//   name : '/add_two_ints',
//   serviceType : 'rospy_tutorials/AddTwoInts'
// });

// var request = new ROSLIB.ServiceRequest({
//   a : 1,
//   b : 2
// });

// addTwoIntsClient.callService(request, function(result) {
//   console.log('Result for service call on '
//     + addTwoIntsClient.name
//     + ': '
//     + result.sum);
// });

// Getting and setting a param value
// ---------------------------------

// ros.getParams(function(params) {
//   console.log(params);
// });

// var maxVelX = new ROSLIB.Param({
//   ros : ros,
//   name : 'max_vel_y'
// });

// maxVelX.set(0.8);
// maxVelX.get(function(value) {
//   console.log('MAX VAL: ' + value);
// });