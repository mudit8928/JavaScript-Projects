let box = document.getElementById('main');
let box_1 = document.getElementById('date');
let box_2 = document.getElementById('time');
let box_3 = document.getElementById('day');

setInterval(() => {
    const get_date = new Date();
    const time = get_date.toLocaleTimeString();
    const date = get_date.toLocaleDateString();
    const day_number = get_date.getDay();
    const daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    const dayname = daysofweek[day_number];
    box_1.innerHTML = date
    box_2.innerHTML = time
    box_3.innerHTML = dayname
},1000)