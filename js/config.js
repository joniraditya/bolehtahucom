(function(yepnope){
 
    yepnope.addPrefix('localjs', function(resourceObj) {
 
        resourceObj.url = 'http://localhost/msr/assets/js/' + resourceObj.url;
 
        return resourceObj;
    });

    yepnope.addPrefix('localcss', function(resourceObj) {
 
        resourceObj.url = 'http://localhost/msr/assets/css/' + resourceObj.url;
 
        return resourceObj;
    });
 
})(this.yepnope);
