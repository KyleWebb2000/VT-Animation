const text = document.querySelector(".country");
const countries = ["Spain","France","Italy","Turkey","Greece","Cyprus","Portugal","Croatia"];
let i = 0;

const animation = () => {
    
        text.textContent = countries[i++];
        if(i == countries.length)
        {
            i = 0;
        }
}

//animation();
setInterval(animation, 4000);
