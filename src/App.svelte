<script>
import {auth, googleProvider} from "./firebase.js"
import {authState} from "rxfire/auth"

// import Add from "./Add.svelte"
import Clothes from "./Clothes.svelte"
import Profil from "./Profil.svelte"
import LogIn from "./LogIn.svelte"
import LogInHeader from "./components/LogInHeader.svelte"

export let menu = 1;


let user;
	
const unsubscribe = authState(auth).subscribe(u => user = u)


 	const login = () => {
	auth.signInWithPopup(googleProvider)
}

const logout = () => {
	auth.signOut()
}




</script>





<main>
	
	
	<div class="login">
	{#if user}

			<nav class="top-menu">
				<div class="blue">
					<a  class="center"  href="/" on:click|preventDefault={() => (menu = 1)}>C.L.E.</a>
				</div>
				<div>
				</div>
				<div>
					<a   class="left" href="/" on:click|preventDefault={() => (menu = 2)}>Klesskap</a>
				</div>
				<div >
					<a  class="left" href="/" on:click|preventDefault={() => (menu = 1)}>Profil</a>
				</div>
			</nav>
		
			{#if menu === 1}
			<Profil />
			{:else if menu === 2}
			<Clothes />
			{:else}
			<h1>
				Page Not Found
			</h1>
{/if}

		
	{:else }
	<LogInHeader />
		<!-- <button on:click={login}>Logg inn</button> -->
		<LogIn />
	{/if}
</div>
</main>











<style>
	nav.top-menu {
	position: fixed;
   	width: 100%;
    height: 4rem;
    background-color: white;
    display: grid;
    grid-template-columns: 5fr 2fr 2fr 2fr  ;
	align-items: center;
	z-index: 1;
	margin: 0;
	
}

.top-menu  > div {
	height: 100%;
	border: 1px solid black;
	color: black;	
	display: grid;
	justify-content: center;
	align-items: center;
	
}



nav.top-menu div a {
	justify-content: center;	
	padding: 0.5rem;
		
}


a {
	color: black;
	text-decoration: none;
}

.top-menu .center {
    display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 500;
}


.blue {
	background-color: #373F5D;
	color: white;
	font-size: 1.8rem;
	letter-spacing: 0.5rem;
}




a:hover {
	text-decoration: underline;
	transition: 3s;
}


a:active {
	color: black;
	text-decoration: underline;
}

@media (max-width: 800px) {
    nav.top-menu {
        grid-template-columns: 2fr 1fr 2fr 2fr   ;
    }
}

</style>



