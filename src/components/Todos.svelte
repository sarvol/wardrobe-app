<script>
    import TodoItem from './TodoItem.svelte'
    import { db } from '.././firebase'
    import { collectionData } from 'rxfire/firestore'
    import { startWith } from 'rxjs/operators'
    import { fly, fade } from 'svelte/transition';


    // User ID passed from parent
    export let uid;

    // Form Text
    let text = ''

    // Query requires an index, see screenshot below
    const query = db.collection('todos').where('uid', '==', uid).orderBy('created');

    const todos = collectionData(query, 'id').pipe(startWith([]));

    const add = () => {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() });
        text = '';
    }

    const updateStatus = (event) => {
        const { id, newStatus } = event.detail;
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    const removeItem = (event) => {
        const { id } = event.detail;
        db.collection('todos').doc(id).delete();
    }
</script>

<main>

<div 
    in:fly="{{ x: -400, duration: 1000, delay: 1100 }}" 
    out:fly="{{ x: -400, duration: 300 }}" 
    class="todoBox"
>
    <h3>Legg til</h3>
   
   <div class="todoInput">
        <input bind:value={text}>
        <button class="add" on:click={add}>Add</button>
   </div>

<div 
    in:fly="{{ x: -400, duration: 1000, delay: 1200 }}" 
    out:fly="{{ x: -400, duration: 300 }}" 
    class="tasks"
>
    <ul>
        {#each $todos as todo}

            <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
            
        {/each}
    </ul>
</div>
</div>

<div class="text">
    <h1 
        in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" 
        out:fly="{{ x: 400, duration: 300 }}"
    >
        En liste = kontroll
    </h1>
    <img 
        in:fly="{{ x: 400, duration: 1000, delay: 1200 }}" 
        out:fly="{{ x: 400, duration: 300 }}" 
        id="loginScreenPhoto" src="././img/mobil.png" 
        alt="illustrasjon av mobil" 
    />

</div>

</main>

<style>
    ul {
         list-style-type: none;
         padding: 0;
         
         
    }
    .tasks {
        height: 25rem;
        overflow: auto;
        margin-bottom: 2rem;
    }

  
       
    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: auto;   
    }
    .todoBox {
        padding: 5rem;
        height: auto;
        background-color: #373F5D; 
    }

    h3 {
        font-weight: 200;
        color: white;
        font-size: 1.2rem;
        margin-bottom: 0;
    }
    
    button, input {
        padding: 1rem;
        margin-bottom: 2rem;
        outline: none;
        margin-top: 0;
    }

    .add {
        background-color: white;
        color: #F75D5D;
        border: #F75D5D;
        width: 5.5rem;
    }
    .add:hover {
        background-color: #F75D5D;
        border: white;
        color: #373F5D;
        transition: 0.3s ease;
    }

    input {
        margin-top: 1rem;
        outline: none;
    }

    img {
        width: 50%;
    }

    h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 4rem;
}

 @media (max-width: 800px) {
     main {
        display: grid;
        grid-template-columns: 1fr;
        
    }

    .text {
        order: 1;
    }

    .todoBox {
        order: 2;
        padding: 2rem;
    }
 }

 @media (max-width: 500px) {
    
    .todoBox {
        padding: 2;
    }

    .todoInput {
        width: 100%;
    }
 }




</style>