

<script>
import { fly, fade } from 'svelte/transition';
import {auth, googleProvider} from "./firebase.js"
import {authState} from "rxfire/auth"
import Add from "./components/Add.svelte"
import Wardrobe from "./components/Wardrobe.svelte"
import LogIn from "./LogIn.svelte"
import ClothesChoice from "./components/ClothesChoice.svelte"
import Typewriter from 'svelte-typewriter'



// logg inn/ logg ut

let user;
	
const unsubscribe = authState(auth).subscribe(u => user = u)


 	const login = () => {
	auth.signInWithPopup(googleProvider)
}

const logout = () => {
	auth.signOut()
}







</script>


<svelte:head>
	<title>Profil</title>
</svelte:head>



<div class="container">
<main>

	<div class="login">
	{#if user}
			<div class="loginInfo">
				<!-- <p><b>Logget inn som: </b>{user.displayName}</p> -->
				<button on:click={logout}>Logg ut</button>
			</div>
			<div 
				in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" 
				out:fly="{{ x: -400, duration: 300 }}" 
				class="photo"
			>
				<img id="loginScreenPhoto" src="././img/klesskap.png" alt="illustrasjon av klesskap" />
				<div 
					in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" 
					out:fly="{{ x: 400, duration: 300 }}" 
					class="tekst"
				>
					<Typewriter  loop interval={200}>
						<h1 id="typing" >Klesskap</h1>
					</Typewriter>
						<h3>I det virtuelle klesskapet har du full oversikt over klærne du eier. Her kan man bla igjennom dem, sortere den, sette sammen nye kombinasjoner eller lage lister over det du skulle trenge. Alt uten å møtte rote rundt i det fysiske klesskapet. Det har aldri vært lettere.
						 </h3>
				</div>
				
			</div>
			<ClothesChoice />
			
		
		<!-- <Add /> -->
	{:else }
		<LogIn />
	{/if}
</div>
</main>




	
	
</div>

<style>


button {
	color: white;
	background-color: #373F5D;
	border-color: steelblue;
	padding: 0.5rem;
	width: 10rem;
	margin: auto auto;
}

button:hover  {
    background-color: #62C5CA;   
}

	
.container {    
	display: grid;		
}

main {
	display: grid;
	margin-top: 4rem;
	margin-bottom: 0;
		
}

.login {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	text-align: center;
	margin: auto auto;
	margin-top: 4rem;
	margin-bottom: 0;
	padding-top: 3rem;
	width: 100%;
	
}

.loginInfo {
	position:absolute;
  	top:4rem; bottom:0; left:75%;right:0;
}

.photo {
	display: grid;
	grid-template-columns: 1fr 1fr;
	border-bottom: 1px solid black;
	padding-bottom: 2rem;
	
}
.photo img {
	width: 70%;
    margin: auto auto;
}

.tekst {
	margin-left: 2rem;
	margin-top: 2rem;
	text-align: left;
	font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 1.2rem;
	margin-bottom: 0;
}


h3 {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    text-align: left;
	padding: 3rem;
	padding-top: 0;
}




@media (max-width: 800px) {
 

.loginInfo {
	position:absolute;
  	top:4rem; bottom:0; left:65%;right:0;
}

.photo {
	grid-template-columns: 1fr;	
}


} 


</style>









