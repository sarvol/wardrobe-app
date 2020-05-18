

<script>
	import { fly, fade } from 'svelte/transition';
	import Loader from "./Loader.svelte"
	import {db, storage} from ".././firebase.js"
	
	let overskrift = ""
	let type = ""
	let progresjon = ""
	let url = ""
	let files = []
	$: file = files[0]
	let kategori = "underdel"
	

	let uid = "img" + new Date();
	

// last opp og registrer klær

	const lastOpp =  async () => {

	progresjon = "...laster opp..."


	const sti = storage
		.ref()
		.child("myclothes/" + file.name)			

	const opplasting = await sti.put(file)
	const urlen = await opplasting.ref.getDownloadURL()
	url = urlen

	progresjon = "Ferdig opplastet" 
	
	}

	const saveClothes= () => {
		const wardrobe = db.collection("wardrobe")
		wardrobe.add({url, overskrift, type})

		url = ""
		overskrift = ""
		type = ""
	}



</script>

<svelte:head>
	<title>Add Clothes</title>
</svelte:head>

<div class="container">
<main>
 	<div 
		in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" 
		out:fly="{{ x: -400, duration: 300 }}"  
		class="spannAll"
	 >
        
		<h1 
			in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" 
			out:fly="{{ x: -400, duration: 300 }}">
			Legg til klær
		</h1>
        <img 
			in:fly="{{ x: -400, duration: 1000, delay: 1200 }}" 
			out:fly="{{ x: -400, duration: 350 }}" 
			id="mobileClothes" 
			src="././img/mobil.png" 
			alt="illustrasjon av mobil som viser klær" 
		/>
    </div>

	<section> 
	
	<div 
		in:fly="{{ x: 400, duration: 2000, delay: 1200 }}" 
		out:fly="{{ x: 400, duration: 300 }}" 
		class="grid"
	>

		<label for={uid}>
			<img class="upload" id="label" src="././img/download.png" alt="download icon">
		</label>
		<input id={uid} type="file" bind:files multiple>
		
		{#if file}
			<p><b>Filen du har valg er:</b> {file.name}</p>
			<button class="btnUpload" on:click={lastOpp}>Last opp bilde</button>
		{:else}
			<p>Velg en fil som du vil laste opp til ditt klesskap</p>
			<button ></button>
		{/if}
	<hr>
	</div>


{#if url} 
	<div class="white">
	<div class="sec1">
		<form on:submit|preventDefault={saveClothes}>
		<p>Navn på plagg</p>
			<input  class="white" bind:value={overskrift} placeholder="Navn" required>
		<p>Velg type klesskap</p>
			<input list="browser" class="white" bind:value={type} placeholder="Type klesplagg" required>
			<datalist id="browser">
				<option value="overdel">overdel</option>
				<option value="underdel">underdel</option>
			</datalist>
		<hr>
			<button class="btnUpload" >Lagre klesplagg</button>
		</form>
	</div>
	
	<div class="sec2">
	
		<img id="preview" src={url} alt="">
	</div>
</div>
	
{:else}
	<div>{progresjon}</div>
{/if}
</section>
</main>

	
	
</div>

<style>
.white {
	background-color: white;
	display: grid;
	grid-column: 1/ -1;
	grid-template-columns: 1fr 1fr;
	border-top: 1px solid black;
}
.grid {
	grid-template-columns: repeat(4, 1fr);
	padding: 0;
	margin: 0;
	padding: 2rem;
	margin: auto auto;
	grid-column: 1/ -1;
}

section {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

label {
	background-color: #F75D5D;
	border-radius: 50%;
	width: 6rem;
	height: 6rem;
	padding: 2rem;
	margin: auto auto;
	margin-bottom: 2rem;
}

label img {
	width: 5rem;
	margin: auto auto;
	cursor: pointer;

}

.grid input {
	display: none;
}

button {
	background-color: #373F5D;
	border-color: black;
	padding: 1rem;
	width: 20rem;
	color: white;
	margin: 1rem;
}

.btnUpload {
	background-color: #373F5D;
	border-color: black;
	padding: 1rem;
	width: 20rem;
	color: white;
	cursor: pointer;
	margin: 1rem;
}

.btnUpload:hover  {
    background-color: #62C5CA;   
}

input {
	border-color: black;
	padding: 1rem;
	width: 20rem;
	color: black;
	cursor: pointer;
	margin: 0.5rem;
	outline: none;
}


main {
	display: grid;
	align-content: start;
	grid-template-columns: 1fr 2fr;
	background: rgb(227,241,248);
    background: linear-gradient(0deg, rgba(227,241,248,1) 12%, rgba(255,255,255,0.9290091036414566) 73%);
    height: 100%;	
}
.spannAll {
	grid-row: 1/-1;
	background-color: #373F5D;
	height: 100%;
}

div {
	margin: auto auto;
}

img#preview  {
	width: 50%;
	background-color: white;
}

#label {
	max-width: 70%;
}


hr {
	width: 50%;
	margin: auto auto;
}

	
form {
	padding: 1rem;
	margin: 0 3rem;
}

#mobileClothes {
    width: 70%; 
}


h1 {
	font-family: Georgia, 'Times New Roman', Times, serif;
	font-weight: 500;
	font-size: 3.5rem;
	text-align: center;
	margin-bottom: 2rem;
	margin-top: 4rem;
	color: white;
}


@media (max-width: 1200px) {
img#preview  {
	width: 50%;
	order:1;
}

#mobileClothes {
	width: 50%;
}

form {
	order:4;
	margin: 0;
}

div {
	height: auto;
}
}

@media (max-width: 1000px) {
.white {
	grid-template-columns: 1fr;	
}

.sec2 {
	order: 1;
	padding-top: 1rem;
}
.sec1 {
	order: 2;
}
}

@media (max-width: 800px) {
#mobileClothes {
    width: 50%; 
}

main {
	grid-template-columns: 1fr;
}

section {
	display: grid;
	grid-template-columns:  1fr;
}
}

@media (max-width: 500px) {

	main {
		grid-template-columns: 1fr;
		width: 100%;
	}

.grid {
	grid-template-columns: 1fr;
	padding: 0;
	margin: 0;
	padding: 2rem; 
	grid-column: 1/ -1;
}
}



</style>

