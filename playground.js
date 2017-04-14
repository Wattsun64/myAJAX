(function() {
	var main = document.getElementById('main'),
		httpRequest;

	main.addEventListener('click', makeRequest);

	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = checkStatus;
		httpRequest.open('GET', 'ajax.txt', true);
		httpRequest.send();
	}

	function checkStatus() {
		if ( httpRequest.readyState === 4 && httpRequest.status === 200 ) {
			console.log('Everthing is good here');
			console.log(httpRequest.responseText)
		}
	}

}())