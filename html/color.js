


styles = [ ["#d94530", "#f2bee2"], ["#272222", "#f4f3ef"], ["#eb9ca1", "#f4f1df"]];

let choice = styles[Math.floor(Math.random() * styles.length)];

document.body.style.backgroundColor = choice[0];
document.body.style.color = choice[1];