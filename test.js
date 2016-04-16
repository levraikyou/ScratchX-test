(function(ext) {
    var ready = false;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.set_ready = function(r) {
        ready = r;
    }
    
    ext.when_ready = function() {
        return ready;
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['', 'set ready', 'set_ready', true],
            ['', 'set unready', 'set_ready', false],
            ['h', 'when ready', 'when_ready'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
