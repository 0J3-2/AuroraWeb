(() => {
	const v = document.createElement('div');
	v.classList.add('auroraBackground');
	document.body.appendChild(v);

	let c;
	setInterval(() => {
		if (!c) {
			c = document.querySelector('#country-code');
		}
		c.innerText = 'AuroraWeb';
		console.log('c');
	}, 1000);

	if (document.location.pathname == '/') {
		document.body.classList.add(['mainPage']);
	}
	document.body.setAttribute('path', document.location.pathname);
})();
