
<script>

    export let data = {}
    export let id = ""
	import {db, storage} from ".././firebase.js"
    const wardrobe = db.collection("wardrobe")

    let overskrift = ""

    // endre-mode
    let editmode = false 

    const toggleEditMode = () => {
        editmode = !editmode
    }

    const updateTitle = () => {
        const item = wardrobe.doc(id)
        item.update({
            overskrift: overskrift
        })
    }

    // slett-mode
    const deleteClothing = () => {
        const item = wardrobe.doc(id)
        item.delete()
    }

</script>

<main class="klesskap">
<div class="clothing">
{#if editmode}

     <article>
        <img src={data.url} alt="">
        <h2><input  bind:value={overskrift} placeholder={data.overskrift} on:input={updateTitle}></h2>
        <div class="buttons">
        <button on:click={toggleEditMode}> Save </button>
        <button on:click={deleteClothing}>Delete</button>
        </div>
    </article>
{:else}

    <article>
        <img src={data.url} alt="">
        <h2>{data.overskrift}</h2>
        <div class="buttons">
        <button on:click={toggleEditMode}>Edit</button>
        <button on:click={deleteClothing}>Delete</button>
        </div>
     </article>

{/if}
</div>
</main>

<style>



img {
    width: 300px;
    height: 300px;
    object-fit: cover;  
}

.clothing {
    display: grid;  
}

input {
    outline: none;
}

.clothing > article {
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}


.klesskap {
    margin: 0;
    padding: 0;
    display: grid;
}


.buttons  {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: right;
    align-items: right; 
     text-align: center;
    color: white;
    
}

.buttons > button  {
    gap: 1rem;
    background-color: #373F5D; 
    padding: 0.5rem 0.2rem;
    color: white;
    width: 6rem;
    border: 1px solid black; 
}

.buttons > button:hover  {
    background-color: #62C5CA;  
    transition: 0.3s ease;
}


h2 {
    font-weight: 300;
    font-size: 1rem;
}


</style>