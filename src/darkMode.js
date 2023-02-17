function DarkMode() {
    let darkOn = true;
    const lightsOff = <h1> Offu desu </h1> 
    const lightsOn = <h1> Onnu desu </h1> 

    function clickHandler(){
        darkOn = !darkOn;
        if(darkOn === true){
            console.log("on");
        }
        else{
            console.log("off");
        }
    }
    return (
        <>
        {darkOn ? lightsOff : lightsOn}
        <button onClick={clickHandler}> Hehe </button>
        </>
    )
}
export default DarkMode;