Memoire
=======

Simple solution for HTML5 ready browsers...

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}

Usage..

download('test.txt', 'Hello world!');


Recorder.prototype.stopRecording=function() {
		if(this.video!=null) {
			console.log("fin enregistrement");
			if(this.frame>0) {
				var output = this.video.compile();
				window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
				window.requestFileSystem(window.TEMPORARY, 500*1024*1024, function(fs){
					fs.root.getFile('video.webm', {create: true}, function(fileEntry) {
						fileEntry.createWriter(function(fileWriter) {
							fileWriter.truncate(0);
						    fileWriter.onwriteend = function(e) {
						    	if (fileWriter.length === 0) fileWriter.write(output);
						    	else {
									var a=document.createElement("a");
									a.href=fileEntry.toURL();
									a.download="video.webm";
									a.click();
						    	}
						    };
						});

					}, errorHandler);
				}, 
				errorHandler);
				this.video=null;
			} else {
				alert("Aucune frame à enregistrer");	
			}
		}
	}
	
	
	
