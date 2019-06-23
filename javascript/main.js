//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');


function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        sec = today.getSeconds();


    const ampm = hour >=12 ? 'PM' : 'AM';

    //12 hour format
    hour = hour%12||12;

    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime,1000);
}

//Adding zero when it shows 1 to 10 seconds

function addZero(n){
    return(parseInt(n,10)<10?'0':'')+n;
}

//for background image

function bgGreet(){
    let today  = new Date(),
        hour = today.getHours();
    
    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Good Morning, ';
        } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
        } else {
        // Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
        }
    }
// GEt Name Function
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent = ['Enter Name']
    }
    else{
        name.textContent = localStorage.getItem('name');
    }

}

function setName(e){
    if (e.type === 'keypress'){
        if(e.which ==13 || e.keyCode ==13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();

        }
    }
    else{
        localStorage.setItem('name',e.target.innerText);//this is used to save the response from the user
    }


}

//Get Focus Function 

function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent = ['Enter Focus']
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }

}


function setFocus(e){
    if(e.type==='keypress'){
        if(e.which ==13 || e.keyCode ==13){
            localStorage.setItem('focus',e.target.innerText);
            name.blur();

        }
    }
    else{
        localStorage.setItem('focus',e.target.innerText);//this is used to save the response from the user
    }


}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
bgGreet();
getName();
getFocus();
