// Sets the background of the site
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
})();
