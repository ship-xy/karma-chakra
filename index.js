// QUOTES
function randomQuote() {
	const randomNumber = Math.floor(Math.random() * 113);
	const quoteObject = quotes[randomNumber];
	document.getElementById("quoteDisplay").innerHTML = `<h3>"${quoteObject.quote.toUpperCase()}" - <u>${quoteObject.author}</u></h3>`;
}
randomQuote();
setInterval(randomQuote,5000);

// CHAKRA - SVG	
const g = document.querySelector('g');
const slices = 7;
const radius = 145;
const days = ["MON", "TUES", "WED", "THU", "FRI", "SAT", "SUN"];

	for (let i = 0; i < slices; i++) {
		const startAngle = (2 * Math.PI / slices) * i;
		const endAngle = (2 * Math.PI / slices) * (i + 1);
		const x1 = radius * Math.cos(startAngle);
		const y1 = radius * Math.sin(startAngle);
		const x2 = radius * Math.cos(endAngle);
		const y2 = radius * Math.sin(endAngle);
		const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
		const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const d = `M0 0 L${x1} ${y1} A${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
		path.setAttribute("d", d);
		path.setAttribute("fill", "#95a5a6");
		path.setAttribute("stroke", "black");
		path.onclick = tasks;
		g.appendChild(path);
		const textAngle = startAngle + (endAngle - startAngle) / 2;
		const tx = (radius / 1.8) * Math.cos(textAngle);
		const ty = (radius / 1.8) * Math.sin(textAngle);
		const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
		label.setAttribute("x", tx);
		label.setAttribute("y", ty);
		label.setAttribute("text-anchor", "middle");
		label.setAttribute("dominant-baseline", "middle");
		label.textContent = days[i];
		g.appendChild(label);
}
function tasks(){
	const taskDiv = document.querySelector("#taskView");
	taskDiv.style.display = taskDiv.style.display === "none"? "flex" : "none";
}
