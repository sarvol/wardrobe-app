<script>

    import { createEventDispatcher } from 'svelte';


    const dispatch = createEventDispatcher();
    
    const remove =() => {
		dispatch('remove', { id });
	}

	const toggleStatus = () => {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    

    export let id; // document ID
    export let text;
    export let complete;
</script>



<li>

{#if complete}
    <span class="is-complete">{ text }</span>
    <button on:click={toggleStatus}> 
            <div class="circle-fill"></div>
     </button>
{:else}
    <span>{ text }</span>
    <button on:click={toggleStatus}> 
    <div class="circle-stroke"></div> 
    </button>
{/if}


<button class="trash" on:click={remove}>  
        
  </button>


</li>

<style>
    .is-complete {
        text-decoration: line-through;
        color: gray;
        
    }

    li {
         list-style-type: none;
         display: grid;
         grid-template-columns: 5fr 1fr 1fr;
         background-color: white;
         /* border-top: 1px solid #F75D5D;
         border-bottom: 1px solid #F75D5D; */
         text-align: left;
         padding: 0.3rem;
        
         
    }

     li:nth-child(odd) {
        background-color: #eee;
    }


button {
    width: 3rem;
    padding: 1rem;
    border: none;
    background-color: rgba(0, 0, 0, 0);
}
.trash {
    background: no-repeat 50% 50% url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1.7rem 1.7rem;
    cursor: pointer;
}

.trash:hover {
    border-radius: 50%;
   border:  1px solid #F75D5D;
   transition: 0.3s ease;
}

.circle-fill {
    background-color: #F75D5D;
    border: 1px solid #F75D5D;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
}
.circle-stroke {
    border: 1px solid #F75D5D;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}

.circle-stroke:hover {
    background-color: #F75D5D;
    border: 1px solid #F75D5D;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    transition: 0.5s ease;
}

span {
    margin: auto 0 auto 0;
}


</style>
