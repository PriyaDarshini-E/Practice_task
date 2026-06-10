const welcome = (callback)=>{
    console.log("Welcome to Callback Function");
    callback();
}
const displayname = () => {
    name1 = "John";
    name2 = "Doe";
    console.log("welcome" +name1+ " " +name2);
}

welcome(displayname);