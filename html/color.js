


styles = [ ["#d94530", "#f2bee2"], ["#272222", "#f4f3ef"], ["#eb9ca1", "#f4f1df"], ["#6e9a75", "#f7f2d2"], ["#e888ce", "#d45e09"],  ["#de704f", "#a9c0ed"]];

let choice = styles[Math.floor(Math.random() * styles.length)];

document.body.style.backgroundColor = choice[0];
document.body.style.color = choice[1];
document.getElementById("mc-embedded-subscribe").style.color = choice[1];