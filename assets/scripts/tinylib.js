fileUploadElement = document.createElement("p")
fileUploadElement.id = "FileUpload"
fileUploadElement.hidden = true
document.body.appendChild(fileUploadElement)

var fpsCalc = {	startTime : 0,	frameNumber : 0,	getFPS : function(){		this.frameNumber++;		var d = new Date().getTime(),			currentTime = ( d - this.startTime ) / 1000,			result = Math.floor( ( this.frameNumber / currentTime ) );		if( currentTime > 1 ){			this.startTime = new Date().getTime();			this.frameNumber = 0;		}		return result;	}	};

function asciiToUTF(ascii) {
	return String.fromCharCode(ascii).toLowerCase()
}

function getEl(id) {
	return document.getElementById(id)
}

function range(start, stop, step) {
	// From https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start
        start = 0
    }

    if (typeof step == 'undefined') {
        step = 1
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return []
    }

    var result = []
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i)
    }

    return result
}

function post(url, data, code) {
	// From https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest and https://stackoverflow.com/questions/18962799/javascript-http-post-with-json-data
    http = new XMLHttpRequest()
	var params = JSON.stringify(data)
	http.open("POST", url, true)

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json")
	
	http.onreadystatechange = function() {
		if (http.readyState == 4) {
			code()
		}
	}
	http.send(params)
}

function get(url, func) {
	// From https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest and https://stackoverflow.com/questions/18962799/javascript-http-post-with-json-data
    http = new XMLHttpRequest()
	http.open("GET", url, true)
	code = func
	http.onreadystatechange = function() { 
		if (http.readyState == 4) {
			code()
		}
	}
	http.send()
}

function save(data,filename) {
	// based off https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
    var textToSave = data
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"})
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob)
    var fileNameToSaveAs = filename
 
    var downloadLink = document.createElement("a")
    downloadLink.download = fileNameToSaveAs
    downloadLink.innerHTML = "Download File"
    downloadLink.href = textToSaveAsURL
    downloadLink.onclick = function(event) { document.body.removeChild(event.target) }
    downloadLink.style.display = "none"
    document.body.appendChild(downloadLink)
 
    downloadLink.click()
}

function fileUpload(code,multiple) {
    // Based off https://stackoverflow.com/questions/10906734/how-to-upload-image-into-html5-canvas.
    if (multiple) {
    	document.getElementById("FileUpload").innerHTML = '<input multiple type="file" id="imageLoader" name="imageLoader" style="visibility:hidden" />'
    }
    else {
    	document.getElementById("FileUpload").innerHTML = '<input type="file" id="imageLoader" name="imageLoader" style="visibility:hidden" />'
    }
    uploadCode = code
    file = 0

    imageLoader = document.getElementById('imageLoader')

    handleImage = function(e) {
        uploadReader = new FileReader()
        uploadReader.onload = function(event) {
        	src = event.target.result
        	uploadCode()
            imageLoader = undefined
            document.getElementById("FileUpload").innerHTML = ""
            handleImage = undefined
            file++
            if (e.target.files[file] != undefined) {
            	uploadReader.readAsDataURL(e.target.files[file])
            }
        }
        uploadReader.readAsDataURL(e.target.files[0])
    }

    imageLoader.addEventListener('change', handleImage, false)
    document.getElementById("imageLoader").click()
}

function cancelUpload() {
    uploadCode = ""
    imageLoader = undefined
    document.getElementById("FileUpload").innerHTML = ""
    uploadImg = undefined
}