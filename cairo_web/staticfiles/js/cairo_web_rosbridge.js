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

// Trigger 1
var triggerPub1 = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_trigger_1',
  messageType : 'std_msgs/Bool',
});

var bool = new ROSLIB.Message({data : true});
triggerPub1.subscribe(function(){
  console.log("Published to Trigger 1!")
})
triggerPub1.publish(bool);

// Trigger 1
var triggerPub2 = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_trigger_2',
  messageType : 'std_msgs/Bool'
});

var bool = new ROSLIB.Message({data : true});
triggerPub2.subscribe(function(){
  console.log("Published to Trigger 2!")
})
triggerPub2.publish(bool);

// Toggle 1
var togglePub1 = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_toggle_1',
  messageType : 'std_msgs/Bool'
});

var bool = new ROSLIB.Message({data : true});
togglePub1.subscribe(function(){
  console.log("Published to Toggle 1!")
})

// Trigger 2
var togglePub2 = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_toggle_2',
  messageType : 'std_msgs/Bool'
});

var bool = new ROSLIB.Message({data : true});
togglePub2.subscribe(function(){
  console.log("Published to Toggle 2!")
})

// Subscribing to a Topic
// ----------------------

var listener1 = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_toggled_1',
  messageType : 'std_msgs/Bool',
  throttle_rate : 1000
});

listener1.subscribe(function(message) {
  console.log('Received message on ' + listener1.name + ': ' + message.data);
});

var listener2 = new ROSLIB.Topic({
  ros : ros,
  name : '/mock_toggled_2',
  messageType : 'std_msgs/Bool',
  throttle_rate : 1000
});

listener2.subscribe(function(message) {
  console.log('Received message on ' + listener2.name + ': ' + message.data);
});

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