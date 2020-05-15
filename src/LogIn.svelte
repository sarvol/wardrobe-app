
<script>

import {auth, googleProvider} from "./firebase.js"
import {authState} from "rxfire/auth"
import Typewriter from 'svelte-typewriter'
import LoaderCircle from './/components/LoaderCircle.svelte'



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
	<title>C.L.E. Login</title>
</svelte:head>


<div class="container">
<main>
	
	<div class="login">
    
    <h1>Har du kontroll på klesskapet ditt?</h1>
    
    <h3>Prøv konseptet "C.L.E.", Det gir deg verktøy til å holde orden i ditt klesskap. Ved å dokumneter hva du allrede eier, og sette de sammen til nye stiler, uten å møtte rote rundt fysisk i klesskapet. </h3>
    <button on:click={login}>
    <Typewriter  loop interval={200}><p>Logg inn</p></Typewriter>
    </button>
    </div>
    
	<div class="photo">
    <img id="loginScreenPhoto" src="././img/login.png" alt="login illustration" />
    </div>
	
    <!-- <div class="circle">
        <LoaderCircle />
    </div>

    <div class="cleInfoBox">
    
    <h1>Om konseptet</h1>  
    
    <h3>Prøv konseptet "C.L.E.", Det gir deg verktøy til å holde orden i ditt klesskap. Ved å dokumneter hva du allrede eier, og sette de sammen til nye stiler, uten å møtte rote rundt fysisk i klesskapet. </h3>
    </div> -->

</main>	

</div>




<style>

main {
    background: rgb(227,241,248);
    background: linear-gradient(0deg, rgba(227,241,248,1) 12%, rgba(255,255,255,0.9290091036414566) 73%);
    height: 100%;
}

button {
	color: white;
	background-color:#373F5D;
	border-color: steelblue;
	
	width: 20rem;
	margin: auto auto;
    margin-top: 3rem;
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
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-template-columns: 1fr 2fr;
		
}

.login {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	text-align: center;
	margin: auto auto;
    margin-top: 5rem;
    margin-left: 1rem;
    padding: 3rem 1rem;
	width: 100%;
}

h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: left;
}

h3 {
    font-weight: 400;
    font-size: 1.2rem;
    text-align: left;
}


div.photo {
    margin: auto auto;
    width: 100%;
}

img#loginScreenPhoto {
    width: 100%;
    margin: auto auto;
}

/* .cleInfoBox {
    height: 70vh;
    margin-left: 8rem;
    width: 50vw;
}


#cle {
    font-weight: 500;
    font-size: 3.5rem;
} */



@media (max-width: 800px) {
    img  {
    width: 100%;
}

main {
	display: grid;
    flex-flow: column;
    padding: 3rem;
    grid-template-columns: 1fr;
	
}


.photo { 
    order: 1; 
    


}
.login { 
    order: 2;  
    margin-top: 0;
    padding: 0;
}

/* .cleInfoBox {
    order: 4;
}

.circle {
    order: 3;
    
} */

h1 {
    margin-top: 0; 
    padding-top: 0;
}

h3 {
    padding: 3rem;
}



} 



</style>