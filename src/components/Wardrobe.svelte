
<script>
    import { fly, fade } from 'svelte/transition';
    import {db, storage} from ".././firebase.js"
    import Item from "./Item.svelte"
    import Loader from "./Loader.svelte"
    let clothes = [] 
    let overskrift = ""
    let item
    let typer = ["underdel", "overdel"]
    let numItems = 100

  
            
    let wardrobe = db.collection("wardrobe")

    wardrobe
        .where("type", "in", typer)
        .onSnapshot(snap => {
            clothes = snap.docs
        })

    const oppdater = () => {
        wardrobe
        .where("type", "in", typer)
        .onSnapshot(snap => {
            clothes = snap.docs
        })
    }
        




    let startPosition = 0
	let itemsPerPage = 12
	
	$:numPages = Math.ceil(numItems / itemsPerPage)
	$:endPosition = startPosition + itemsPerPage	
	$:currentItems = clothes.filter( (item, i) => i >= startPosition && i < endPosition)
	
	$:disabledPrev = startPosition - itemsPerPage < 0 
	$:disabledNext = startPosition + itemsPerPage >= numItems
	
	$:currentPage = 1 + startPosition / itemsPerPage
	
	const next = () => {
		startPosition += itemsPerPage
	}
	
	const prev = () => {
		startPosition -= itemsPerPage
	}


</script>


<svelte:head>
	<title>Wardrobe</title>
</svelte:head>

<main class="klesskap"> 

<section class="spanAll">
    <h1 in:fly="{{ x: -400, duration: 1000, delay: 500 }}" out:fly="{{ x: -400, duration: 300 }}">Dine Klær</h1>
    <div in:fly="{{ x: -400, duration: 1000, delay: 600 }}" out:fly="{{ x: -400, duration: 300 }}" class="buttons">
        <button on:click={ () => { typer=["underdel", "overdel"]; oppdater(); } } >Alle</button>
        <button on:click={ () => { typer=["overdel"]; oppdater(); } } >Overdel</button>
        <button on:click={ () => { typer=["underdel"]; oppdater(); } } >Underdel</button> 
    </div>
    
    
</section>


<nav in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}">
		<button on:click={prev} disabled={disabledPrev}>
            <p><i class="arrow left"></i></p>
        </button>	
		<label>{currentPage} / {numPages}</label>
		<button on:click={next} disabled={disabledNext}>
            <p><i class="arrow right"></i></p>
        </button>	
</nav>


<div in:fade="{{ duration: 1000, delay: 1100 }}" out:fade="{{ duration: 300 }}" class="clothing">
{#each currentItems as item, i} 
   <Item id={item.id} data={item.data() } />
    
{:else}
<div class="loader">
    <Loader />
</div>
    
{/each}
  </div>  


<nav>
		<button on:click={prev} disabled={disabledPrev}>
            <p><i class="arrow left"></i></p>
        </button>	
		<label>{currentPage} / {numPages}</label>
		<button on:click={next} disabled={disabledNext}>
            <p><i class="arrow right"></i></p>
        </button>	
</nav>



</main>

<style>

label {
    margin: auto auto;
}

nav {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
        width: 30rem;
        margin: auto auto;
        padding: 1rem;
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


.clothing {
   
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

main.klesskap {
    margin: 0;
    padding: 0;
    display: grid;
}

.spanAll{
    margin-top: 4rem;
    grid-column: 1/-1;
}

h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 4rem;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: black;   
}


.buttons  {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.2rem;
    text-align: center;
    color: white;
    width: 30rem;
    height: 10rem;
    margin: auto auto;
      
}

 .buttons > button  {
    gap: 0.5rem;
    background-color: #373F5D; 
    padding: 0.5rem 0.2rem;
    color: white;
    width: 7rem;
    border: 1px solid black;
    margin: auto auto;
}

 .buttons > button:hover  {
    background-color: #62C5CA; 
    transition: 0.3s ease;
   
}

.loader {
    grid-column: 1/-1;
}

 @media (max-width: 800px) {
    .buttons  {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.2rem;
    text-align: center;
    color: white;
    width: 100%;
    height: 10rem;
     margin: auto auto;
   

}

nav {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		width: 100%;
	}

.clothing {
   
    display: grid;
    grid-template-columns: 1fr;
}

} 

</style>