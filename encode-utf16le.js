module.exports = function(RED) {

function encodeUTF16Node(config) {
    RED.nodes.createNode(this,config);
    // node-specific code goes here
	var node = this;
        node.on('input', function(msg, send, done) {
    // Check the msg data input
	
	
	if (msg.payload === undefined)
	{
		this.warn("no msg.payload");
		node.status({fill:"red",shape:"dot",text:"ERROR: no msg.payload"});
		var err = "no msg.payload";
		node.error(err);
	}
	else
	{
		
		var buffer = msg.payload;
		let utf8 = buffer.toString('utf16le');
		msg.payload = utf8;
		node.status({fill:"green",shape:"ring",text:"encoded"});
	}
	






	
	

        
        
  
  
	node.send(msg);
    
    // Once finished, call 'done'.
    // This call is wrapped in a check that 'done' exists
    // so the node will work in earlier versions of Node-RED (<1.0)
    if (done) {
        done();
    }
});
	}

RED.nodes.registerType("encode-utf16le",encodeUTF16Node);
}
