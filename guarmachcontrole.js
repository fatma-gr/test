import { useState } from "react";
export default function Partie1(){
    const [nom,setnom]=useState("")
    const [prenom,setprenom]=useState("")
    const [email,setemail]=useState("")
    const [apprendere,setapprendere]=useState("")
    const [niveu,setniveu]=useState("")
    const [vous,setvous]=useState("")
    const [text,settext]=useState("")
    function afficher(e){
        e.preventDefault
        settext(<h1>{nom}{prenom}{email}{apprendere}{niveu}{vous}</h1>)
    }
    return(
            <>
                <form onSubmit={afficher}>
                    <fieldset>
                    <legend>saisissez votre coordonee</legend>
                   qu'el est votre nom? <input type="text" onChange={(e)=>(setnom(e.target.value))}/><br/>
                    qu'el est votre prenom?<input type="text" onChange={(e)=>(setprenom(e.target.value))}/><br/>
                    qu'el est votre adresse email?<input type="text" onChange={(e)=>(setemail(e.target.value))}/><br/>
              
                    </fieldset>
                    <fieldset>
                        <legend>choix de la formation:</legend>
                    <label>choisissez la langue que vous souhaite apprendere:</label><br/>
                    <select  onChange={(e)=>(setapprendere(e.target.value))}>
                        <option>HTML5</option>
                        <option>CSS</option>
                        <option>bootstap</option>
                        <option>js</option>
                    </select>
                    </fieldset>
                    <fieldset>
                        <legend>votre niveu</legend>
                    <label>quel est votre niveu actuel?</label>
              
                    <input type="radio" name="A" value={"debutant"} onChange={(e)=>(setniveu(e.target.value))}/>debutant<br/>
                    <input type="radio" name="A" value={"Intermediair"} onChange={(e)=>(setniveu(e.target.value))}/>Intermediair<br/>
                    <input type="radio" name="A" value={"Avance"} onChange={(e)=>(setniveu(e.target.value))}/>Avance<br/>
                    </fieldset>
                    <fieldset><legend>a propos de vous</legend>
                    presnter-vous en quelque lignes<input type="texer"onChange={(e)=>(setvous(e.target.value))}/><br/>
                    </fieldset>
                    <button>Envoyer</button>
                </form>
                <p>{text}</p>
       
                </>

    )

}


