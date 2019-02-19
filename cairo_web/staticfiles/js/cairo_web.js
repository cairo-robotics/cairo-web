$(document).ready(function() {

    $('input:checkbox #toggle1').change(
        function(){
            if ($(this).is(':checked')) {
                var bool = new ROSLIB.Message({data : true});
                togglePub1.publish(bool);
            } else {
                var bool = new ROSLIB.Message({data : false});
                togglePub1.publish(bool);
            }
        });

    $('input:checkbox #toggle2').change(
        function(){
            if ($(this).is(':checked')) {
                var bool = new ROSLIB.Message({data : true});
                togglePub1.publish(bool);
            } else {
                var bool = new ROSLIB.Message({data : false});
                togglePub1.publish(bool);
            }
        });

});

