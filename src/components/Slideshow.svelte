
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




// ikke ferdig funksjon - fungerer ikke 

let currentComponent = 0;
	const prev = () => currentComponent < 1
			 ? currentComponent = clothes.length - 1
			 : currentComponent--;
    
    const next = () => currentComponent >= clothes.length - 1 
			? currentComponent = 0
			: currentComponent++;
	

</script>



<main>
<div class="all">
<section 
in:fly="{{ x: 500, duration: 1000, delay: 1000 }}" out:fly="{{ x: 400, duration: 300 }}"   
class="container" >
            
            <div class="slide-wrapper">
                
                <div class="slides">
                    {#each clothes as item} 
                 
                 <article>
                    <Slides  data={item.data() } />
                 </article>
                
                {:else}
                <div class="loader">
                    <Loader />
                </div>
        {/each}
                    
                    
                    
        </div>
        </div> 
                <nav 
                    in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" 
                    out:fly="{{ x: 400, duration: 300 }}"
                >
                    <button on:click={prev} >
                        <p><i class="arrow left"></i></p>
                    </button>	
                        
                    <button on:click={next}>
                        <p><i class="arrow right"></i></p>
                    </button>	
                </nav>
                 
        </section>
        </div>

        <div class="all">
<section 



in:fly="{{ x: 500, duration: 1000, delay: 1000 }}" out:fly="{{ x: 400, duration: 300 }}"   
class="container" >
            
            <div class="slide-wrapper">
                
                <div class="slides">
                    {#each clothes as item} 
                 
                 <article>
                    <Slides  data={item.data() } />
                 </article>
                
                {:else}
                <div class="loader">
                    <Loader />
                </div>
        {/each}
                    
                    
                    
        </div>
        </div> 
                <nav 
                    in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" 
                    out:fly="{{ x: 400, duration: 300 }}"
                >
                    <button on:click={prev} >
                        <p><i class="arrow left"></i></p>
                    </button>	
                        
                    <button on:click={next}>
                        <p><i class="arrow right"></i></p>
                    </button>	
                </nav>
                 
        </section>
</div>


</main>


<style>



:root {
    --bredde: 20rem;
     --hoyde: 20rem;
   
}

* {
    margin: 0;
    box-sizing: border-box;
}

main {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 4rem;
}

div.all {
    height: auto;
}

.container {

    width: var(--bredde); 
    height:  var(--hoyde); 
    
    margin: auto;
    border: 4px solid white;
}

.slide-wrapper {
    width: 100%;
    height:  var(--hoyde);
    overflow: auto;
    scroll-snap-type: x mandatory;
    border: 1px solid black;
    margin-top: 0.5rem; 
}

.slides {
    width: 100%;
    height:  var(--hoyde);
    background-color: orange;
    display: grid;
    grid-template-columns: repeat(200, 1fr);
    grid-auto-rows: 260px;
    
}

.slides article {
    scroll-snap-align: center;
}






/* navigation */


nav {
		display: grid;
		grid-template-columns: 1fr  1fr;
		gap: 2rem;
        
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




 /* @media (max-width: 800px) {
 
 .container {

    width: 10rem; 
    height:  10rem; 
    
   
}

.slide-wrapper {
    
    height:  10rem;
    
}

.slides {
    
    height:  10rem;
   
}

} */



    </style>