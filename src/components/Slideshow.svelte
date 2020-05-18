
<script>
import { fly, fade } from 'svelte/transition';



</script>

<main>

<div> 
<section in:fly="{{ x: -500, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}"   class="container container-1" >
            
            <div class="slide-wrapper">
                
                <div class="slides">
                    
                    
                    <article id="s-1"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-2"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"></article>
                    <article id="s-3"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-4"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-5"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-6"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-7"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-8"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    
                </div>
                <div class="buttons">
                    <button id="prev" on:click="{prev}"></button>
                    <button id="next" on:click="{next}"></button>
                </div>
                
            </div>    
                 
        </section>

</div>
<section class="img">
        <div>
        <h1 in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" out:fly="{{ x: 400, duration: 300 }}">Finn nye kombinasjoner</h1>
        <img in:fly="{{ x: 500, duration: 1000, delay: 1400 }}" out:fly="{{ x: 400, duration: 300 }}" id="weatherThinking" src="././img/mobil.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg" />
    
    </div>

</section>




</main>

<style>
    :root {
    --height: 20rem;
    --width: 40rem;

}

* {
    margin: 0;
    box-sizing: border-box;
}


main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    padding: 1rem;
    height: 100%;

}

.container {

    width: var(--width);    
    height: var(--height) ;    
    margin: auto;
    border: 4px solid white;
}

.container-1 {
    order: 1;
}


.slide-wrapper {
    width: 80%;
    height: 100%;
    margin: auto auto;
    overflow: auto;
    scroll-snap-type: x mandatory;
}

.slides {
    width: 800%;
    height: 100%;
    background-color: #eee;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: 260px;
    
}

.slides article {
    scroll-snap-align: center;
    scroll-behavior: smooth;
}

.slides article img {
    width: 100%;
    height: var(--height);
    object-fit: cover;
    object-position:  center;
    
}



  h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
}

img {
     width: 60%; 
     
}



    
    </style>