window.addEventListener('load', () => {
	let 
		input = document.getElementById('search'),
		sendBtn = document.getElementById('sendBtn'),
		resultsDiv = document.getElementsByClassName('results')[0],
		loader = document.querySelector('.loader');
	sendBtn.addEventListener('click', () => {
		resultsDiv.innerHTML = ''
		loader.style.display = 'flex'

		let url = 'https://api.unsplash.com/search/photos?client_id=M4tosJ0ZVtdOsBKPnaDIMQ3ik-IZf1OlhOWMIGfwSJw&query='+input.value;
		let fet = fetch(url);
		let then = fet.then((x) => {
			let js = x.json(); 

			js.then((data) => {
				for (var i = 0; i <= data.results.length - 1; i++) {
					console.log(data.results[i].urls.full)

					let itemDiv = document.createElement('div');
					itemDiv.className = 'item';

					itemDiv.innerHTML = `<img src="${data.results[i].urls.full}" class="ok" alt="Url">`;

					resultsDiv.appendChild(itemDiv);

					console.log(i)

					if (i == 9) {
						loader.style.display = 'none';
					}
				}

			})
		})
	})
})
