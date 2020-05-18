
<script>
import { fly, fade } from 'svelte/transition';
import {db, storage} from ".././firebase.js"
import Slides from "./Slides.svelte"
import Loader from "./Loader.svelte"
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


<div> 
<section 
in:fly="{{ x: -500, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}"   
class="container container-1" >
            
            <div class="slide-wrapper">
                
                <div class="slides">
                    {#each clothes as item, i} 
                <Slides id={item.id} data={item.data() } />
                    
                {:else}
                <div class="loader">
                    <Loader />
                </div>
            
        {/each}
                    
                    
                    
                </div>
                </div> 
                <nav 
                    in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" 
                    out:fly="{{ x: -400, duration: 300 }}"
                >
                    <button >
                        <p><i class="arrow left"></i></p>
                    </button>	
                        
                    <button>
                        <p><i class="arrow right"></i></p>
                    </button>	
                </nav>
                
               
                 
        </section>

</div>
<section class="img">
        <div>
        <h1 in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" out:fly="{{ x: 400, duration: 300 }}">Finn nye kombinasjoner</h1>
        <img in:fly="{{ x: 500, duration: 1000, delay: 1400 }}" out:fly="{{ x: 400, duration: 300 }}" id="weatherThinking" src="././img/mobil.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg" />
    
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
    margin-top: 2rem;
    padding: 1rem;
    /* height: 100%; */

}

.container {

    width: var(--width);    
    height: var(--height) ;    
    margin: auto;
    border: 4px solid white;
}

.container-1 {
    order: 1;
}


.slide-wrapper {
    width: 100%;
    height: 100%;
    margin: auto auto;
    overflow: auto;
    /* scroll-snap-type: x mandatory; */
    border: 1px solid black;
}

.slides {
    width: 2000%;
    height: 100%;
    background-color: #eee;
    display: grid;
    grid-template-columns: repeat(17, 1fr);
    grid-auto-rows: 100rem;
    
}

.slides {
    scroll-snap-align: center;
    scroll-behavior: smooth;
}

.slides  {
    width: 100%;
    height: var(--height);
    object-fit: cover;
    object-position:  center;
    
}



  h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
}

.img img {
     width: 60%; 
     
}

nav {
		display: grid;
		grid-template-columns: 1fr  1fr;
		gap: 2rem;
        width: 30rem;
        margin: auto auto;
        padding: 1rem;
        transform: translateY(-2.5rem);
	}

    nav button {
        gap: 0.5rem;
        background-color: white; 
        border: 1px solid black;
        padding: 0.2rem;
        width: 7rem;
        margin: auto auto;
    }

    nav button:hover {
        background-color: #373F5D; 
        color: white;
        transition: 0.3s ease;
    }
	
    p {
        margin: 0;
        padding: 0.2rem;
    }

.arrow {
        border: solid #F75D5D;
        border-width: 0 0.2rem 0.2rem 0;
        display: inline-block;
        padding: 0.2rem;
}


.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

    
    </style>