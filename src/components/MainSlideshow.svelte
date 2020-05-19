
<script>
import { fly, fade } from 'svelte/transition';
import {db, storage} from ".././firebase.js"
import Slides from "./Slides.svelte"
import Loader from "./Loader.svelte"
import Slideshow from "./Slideshow.svelte"
let clothes = [] 
let overskrift = ""
let item
let typer = ["underdel", "overdel"]



let wardrobe = db.collection("wardrobe")

    wardrobe
        .where("type", "in", typer)
        .onSnapshot(snap => {
            clothes = snap.docs
        })




</script>

<main>



<section 
in:fly="{{ x: 500, duration: 1000, delay: 1000 }}" out:fly="{{ x: 400, duration: 300 }}"   
class="container container-1" >        
        <Slideshow />           
 </section>



<section in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}" class="img">
        <div>
        <h1 in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}">Finn nye kombinasjoner</h1>
        <img in:fly="{{ x: -500, duration: 1000, delay: 1400 }}" out:fly="{{ x: -400, duration: 300 }}" id="screen" src="././img/mobil.png" alt="illustrasjon av mobil" />
    
    </div>

</section>




</main>

<style>
    :root {
    --height: 20rem;
    --width: 40rem;

}

* {
    margin: 0;
    box-sizing: border-box;
}


main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
   
    
    /* height: 100%; */

}


.img {
    background-color: #373F5D;
    color: white;
     height: 100%;
}
.container-1 {
    order: 1;
}



  h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 4rem;
}

.img img {
     width: 60%; 
     
}


 @media (max-width: 800px) {
   main {
    grid-template-columns: 1fr;
}

#screen{
    width: 50%;
}
   

}
    
	



    
    </style>