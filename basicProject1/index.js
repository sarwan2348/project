const inputEl =document.getElementById("Name");
const showNameEl =document.getElementById("nameShow");
const formel = document.getElementById("takeNameForm");
formel.addEventListener("submit",(event)=>{
    event.preventDefault();
    const Name = inputEl.value;
    if(Name==="Alishan"){
         showNameEl.textContent="Name doesn't exists";
            
    }else{
        showNameEl.textContent=Name;
    }
    

    inputEl.value="";
    event.target.reset();
});
//onsubmit button 

