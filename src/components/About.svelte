

<script>
import { fly, fade } from 'svelte/transition'
import axios from "axios"
import Loader from "./Loader.svelte"
import LoaderCircle from "./LoaderCircle.svelte"
import FlipCard from "./FlipCard.svelte"






</script>


   <main>
   

   <div in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}"  class="infoBox">
         <!-- <LoaderCircle /> -->
         <img src="././img/sustain.png" alt="illustrasjon av hånd som holder en plante" class="illustration" />
        <h2>C.I.R.C.L.E. = C.L.E.</h2>
        <p>C.L.E. er et konspet som bygger på bærekraft. Der man skal skape sirkulasjon i garderoben, ved å gi oversikt til brukeren. Dette ved å tilby interaksjon mellom siden og brukeren, der de kan laste opp klærne sine, lage lister og sjekke været.</p>

        <FlipCard />
       
    
    </div>

    <div>
        <h1 in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" out:fly="{{ x: 400, duration: 300 }}">Grønnere klesforbruk</h1>

        <div in:fly="{{ x: 400, duration: 1000, delay: 1200 }}" out:fly="{{ x: 400, duration: 300 }}" class="facts">
            <div>
                <h3>Produksjon og forbruk av klær har stor innvirkning på miljøet. Ved å forlenge levetiden kan vi bidra til et mer bærekraftig forbruk.</h3>
                <p>I EU er tekstiler det fjerde mest miljøbelastende forbruksområdet etter bolig, transport og mat. For å nå et mer bærekraftig forbruk av klær må vi få en mer miljøvennlig klesproduksjon med krav til kvalitet og design for lang levetid og et livssyklusperspektiv. Bærekraft innebærer også en produksjon som støtter sosial bærekraft. </p>
            </div>
           
            <div>
                
                <img in:fly="{{ x: 500, duration: 1000, delay: 1400 }}" out:fly="{{ x: 400, duration: 300 }}" class="illustration" src="././img/klesskap.png" alt="illustrasjon av klesskap" />
            </div>
            <div>
                <h3>Ta vare på klærne</h3>
                <p>I et «bruk- og kast-samfunn» opplever vi at produkter fort går i stykker eller ikke kan brukes. Skal vi få til et mer bærekraftig forbruk må vi bruke det vi har lengst mulig. Dette gjør vi blant annet ved å gjenbruke ved at man reparerer, syr om, bytter, låner, arver og tar godt vare på det vi har.

                Dessverre vanskeliggjøres reparasjoner på grunn av høye kostnader. I 1950 var det for eksempel 4620 skomakere i Norge, nå er det omtrentlig 200 igjen. Dette er yrkesgrupper som må tilbake, og som det være naturlig å oppsøke når sko og klær går i stykker.</p>
            </div>
            <div>
                <h3>Gjenbruk har mye større klimagevinster</h3>
                <p>En rapport fra 2016, bestilt av Nordisk ministerråd, tar for seg hvordan nordiske land bedre kan utnytte tekstilmaterialer folk ikke lenger vil ha. Ifølge rapporten kjøper nordiske forbrukere i fem land 365.000 tonn nye klær og tekstiler hvert år. Kun én tredjedel blir samlet inn for gjenbruk og gjenvinning, mens to tredjedeler går i restsøpla. Mesteparten av dette hadde vært egnet til gjenbruk og gjenvinning.

                «Gjenbruk, både i nordiske land og i andre områder i verden, gir utvilsomt de største miljømessige fordelene sammenlignet med gjenvinning», konkluderer rapporten.</p>
            </div>
        
    
        </div>

        

    
    </div>
    
   </main>
  

  <style>
    main {
        display: grid;
	    grid-template-columns: 1fr 2fr;
        padding-bottom: 2rem;
        background: rgb(227,241,248);
        background: linear-gradient(0deg, rgba(227,241,248,1) 12%, rgba(255,255,255,0.9290091036414566) 73%);
        height: 100%;
        
        
    }

    .facts {
        display: grid;
	    grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin: auto auto;
    }


    h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 6rem;
    margin-top: 6rem;
}

    h2 {
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 2rem;
        
    }

    h3 {
        font-size: 1.2rem;
        padding: 0 1.2rem ;
        font-weight: 500;
        text-align: left;
        margin: 0;
    }

    p {
        font-size: 1rem;
        text-align: left;
        padding: 0 1.2rem;
        margin-left: 1.2rem;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }

     .infoBox p {
         font-size: 1.2rem;
         font-weight: 300;
         padding: 2rem;
         margin: 0;
         text-align: center;
     }

    
    

    .infoBox {
        background-color: #373F5D;
        color: white;
        height: 100%;
        padding-bottom: 2rem;
        
        
    }

    .illustration {
        width: 60%; 
    }

    



 

    @media (max-width: 1100px) {
        main {
	    grid-template-columns: 1fr; 
    }

    .infoBox {
        width: 25rem;
        height: 35rem;
        order: 2;
        margin: auto auto;
    }

    .illustration {
        order: 1;
        width: 60%;
        margin: auto auto;
    }

    .facts {
	    grid-template-columns: 1fr;
        
    }
    }

    @media (max-width: 800px) {
    
    .infoBox {
        height: auto;
        order: 2;
        margin: auto auto;
        margin-top: 3rem;
    }

    .illustration { 
        width: 70%; 
    }

    main {
        height: auto;
    }



    }

@media (max-width: 500px) {
    
}

    
  </style>