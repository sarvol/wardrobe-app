
<script>
import {auth, googleProvider} from ".././firebase.js"
import {authState} from "rxfire/auth"
import Add from "./Add.svelte"
import Weather from "./Weather.svelte"
import LoaderCircle from "./LoaderCircle.svelte"
import LogIn from ".././Login.svelte"
import Loader from "./Loader.svelte"
import About from './About.svelte'



let user;
	
const unsubscribe = authState(auth).subscribe(u => user = u)


 	const login = () => {
	auth.signInWithPopup(googleProvider)
}

const logout = () => {
	auth.signOut()
}



export let menu = 1;

</script>

<svelte:head>
	<title>C.L.E. Profil</title>
</svelte:head>


<main>
	
	
	<div  class="secondMenu">
	{#if user}

			<nav class="menu">
				
			
				<div>
					<a    href="/" on:click|preventDefault={() => (menu = 1)}>Værmelding</a>
				</div>
				<div >
					<a   href="/" on:click|preventDefault={() => (menu = 2) }>Last opp klær</a>
				</div>
				<div >
					<a   href="/" on:click|preventDefault={() => (menu = 3) }>Om C.L.E.</a>
				</div>
                <div>
				</div>
			</nav>
		
			{#if  menu === 1 ? 'active' : ''}
			<Weather  />
			{:else if menu === 2}
			<Add />
			{:else if menu === 3}
			<About  />
			{:else}
			    <LoaderCircle />
{/if}

		
	{:else }
        <LogIn />
	{/if}
</div>
</main>

<style>









.secondMenu {
    width: 100%;
    margin: 0;
    padding: 0;
}
.menu {
   	width: 100%;
    height: 4rem;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 5fr   ;
	align-items: center;
	z-index: 1;
	margin: 0;
    background-color: white;
    
  
    justify-content: center;
    /* align-items: center; */
    
    position: -webkit-sticky; 
    position: sticky;
    top: 4.01rem;
}

.menu div {
    color: black;	
	display: grid;
	justify-content: center;
	align-items: center;
    border: 1px solid black;
    background-color: white;
    height: 100%;
}




nav.menu div a {
	justify-content: center;	
	padding: 0.5rem;
    color: black;
	text-decoration: none;
		
}

nav.menu div a:hover {
	text-decoration: underline;
    transition: 3s;
		
}

@media (max-width: 800px) {
    .menu {
        grid-template-columns: 2fr 2fr 2fr 1fr ;
        
    }
}










</style>