
<script>

    export let data = {}
	import {db, storage} from ".././firebase.js"
    const wardrobe = db.collection("wardrobe")

    let overskrift = ""

    

</script>



<div class="slides">

    <article>
        <img src={data.url} alt="">
     </article>
</div>

<style>
* {
    margin: 0;
    box-sizing: border-box;
}

  :root {
    --bredde: 30rem;
     --hoyde: 30rem;
   
}
/* 
 .klesskap {
    height: 100%;
    margin: auto auto;
    overflow: auto;
   
} 


.clothing article {
    scroll-snap-align: center;
    scroll-behavior: smooth;
    display: inline;
}







 .clothing {
    display: grid;  
}


.clothing > article {
    
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
}  */



img {
    width: var(--bredde);
    height: var(--hoyde);
    object-fit: cover;
    object-position: bottom center;
}



</style>