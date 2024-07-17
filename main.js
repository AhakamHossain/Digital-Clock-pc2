const date = document.getElementById(`date`);
const hrs = document.getElementById(`hrs`);
const min = document.getElementById(`min`);
const sec = document.getElementById(`sec`);

const months = [`January`, `February`, `March`, `April`,`May`, `Jun`, `July`, `August`, `September`, `October`, `November`, `December`];



setInterval(()=>{
    const dates = new Date();

    date.innerHTML = dates.getDate() + ` ` + months[dates.getMonth()] + ` ` + dates.getFullYear();

    hrs.innerHTML = (dates.getHours() < 10 ? `0` : ``) + dates.getHours();

    min.innerHTML = (dates.getMinutes() < 10 ? `0` : ``) + dates.getMinutes();

    sec.innerHTML = (dates.getSeconds() < 10 ? `0` : ``) + dates.getSeconds() ;
})