import {cinemas} from './guarmachdata';
// q1
export default function Partie1(){
          return(
              cinemas.map(function (cine){
                return(
                  <>
                  <p>{cine.id}</p><br/>
                  <p>{cine.nom}</p><br/>
                  <p>{cine.nombereSalles}</p><br/>
                  <p>{cine.emplacement}</p><br/>
                  <p>{cine.serviceSnack}</p><br/>
                  </>
              )
          })
      )
  }
  
  
  
//   ---------------------------------------------------------
// q2
  export default function Partie2(){
          return(
              cinemas.filter(function (cine){
                  return cinemas.emplacement=="Casablanca"
              }).map(function (cine){
              return(
                  <>
                  <p>{cine.id}</p><br/>
                  <p>{cine.nom}</p><br/>
                  <p>{cine.nombereSalles}</p><br/>
                  <p>{cine.emplacement}</p><br/>
                  <p>{cine.serviceSnack}</p><br/>
                  </>
           )
          })
       )
  }
//   -----------------------------------------------
// q3
export default function Partie3(){
      return(
          cinemas.filter(function (cinemas){
         return cinemas.serviceSnack=="oui" 
      }).map(function (cinemas){
          return(
          <>
              <p>{cinemas.id}</p><br/>
              <p>{cinemas.nom}</p><br/>
              <p>{cinemas.nombereSalles}</p><br/>
              <p>{cinemas.emplacement}</p><br/>
              <p>{cinemas.serviceSnack}</p><br/>
          </>
       )
      })
   )
  }
//   ---------------------------------------
// q4
  export default function Partie4(){
   return(
       cinemas.filter(function (cinemas){
      return cinemas.nombereSalles>5 
   }).map(function (cinemas){
       return(
       <>
           <p>{cinemas.id}</p><br/>
           <p>{cinemas.nom}</p><br/>
           <p>{cinemas.nombereSalles}</p><br/>
           <p>{cinemas.emplacement}</p><br/>
           <p>{cinemas.serviceSnack}</p><br/>
       </>
    )
   })
   )}
//   ---------------------------------------
// q5
  export default function Partie5(){
      return(
          cinemas.filter(function (cinemas){
            return cinemas.serviceSnack="oui" && cinemas.nombereSalles>3 
      }).map(function (cinemas){
          return(
          <>
              <p>{cinemas.id}</p><br/>
              <p>{cinemas.nom}</p><br/>
              <p>{cinemas.nombereSalles}</p><br/>
              <p>{cinemas.emplacement}</p><br/>
              <p>{cinemas.serviceSnack}</p><br/>
          </>
       )
      })
   )
  }
// ---------------------------------
// q6
export default function Total6(){
      var a=cinemas.reduce(function (somme,cinemas){
          return(
              somme+=cinemas.nombereSalles
          )
      },0) 
           return(<p>{a}</p>)
                 
}
  
  
  
  

  
  
  