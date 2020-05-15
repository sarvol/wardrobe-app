
<script>
import { fly, fade } from 'svelte/transition';
</script>

<main>

<div> 
<section in:fly="{{ x: -500, duration: 1000, delay: 1000 }}" out:fly="{{ x: -400, duration: 300 }}"   class="container container-1" >
            
            <div class="slide-wrapper">
                
                <div class="slides">
                    <!--
                    <article>1</article> 
                    <article>2</article> 
                    <article>3</article> 
                    <article>4</article> 
                    <article>5</article> 
                    <article>6</article> 
                    <article>7</article> 
                    <article>8</article> 
                    -->
                    
                    <article id="s-1"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-2"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"></article>
                    <article id="s-3"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-4"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-5"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-6"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-7"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-8"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    
                </div>
                <!-- <div class="buttons">
                    <button id="prev" on:click="{prev}"></button>
                    <button id="next" on:click="{next}"></button>
                </div> -->
                
            </div>    
                 
        </section>
<section in:fly="{{ x: -500, duration: 1000, delay: 1300 }}" out:fly="{{ x: -400, duration: 300 }}" class="container container-2">
            
            <div class="slide-wrapper">
                
                <div class="slides">
                    <!--
                    <article>1</article> 
                    <article>2</article> 
                    <article>3</article> 
                    <article>4</article> 
                    <article>5</article> 
                    <article>6</article> 
                    <article>7</article> 
                    <article>8</article> 
                    -->
                    
                    <article id="s-1"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-2"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"></article>
                    <article id="s-3"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-4"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-5"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-6"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-7"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    <article id="s-8"><img src="././img/weather.png" alt="illustrasjon av jente som tenker på hva hun skal ha på seg"/></article>
                    
                </div>
                 <!-- <div class="buttons">
                    <button id="prev" on:click="{prev}"></button>
                    <button id="next" on:click="{next}"></button>
                </div> -->
                
            </div>    
                 
        </section>
        
        <!-- <nav class="slide-nav">
            <a href="#s-1">1</a>
            <a href="#s-2">2</a>
            <a href="#s-3">3</a>
            <a href="#s-4">4</a>
            <a href="#s-5">5</a>
            <a href="#s-6">6</a>
            <a href="#s-7">7</a>
            <a href="#s-8">8</a>            
        </nav> -->

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
.container-2 {
    order: 3;
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

/* .slide-nav {
    width: var(--bredde);
    margin: 30px auto;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: 8px;
}

.slide-nav a {
    text-decoration: none;
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
} */


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


/* buttons */
/* 
.buttons button#next {
    position: absolute;
    top: 50%;
    right: 15px;
  }

	.buttons button#next:before {
			 font-family: 'FontAwesome';
			content:"\f054";
			padding:0 4px 0 6px;   
	} 
	
  .buttons button#prev {
    position: absolute;
    top: 50%;
    left: 15px;
  }

	.buttons button#prev:before {
			 font-family: 'FontAwesome';
			content:"\f053";
			padding:0 6px 0 4px;   
	} 
	
  .buttons button {
    border: 2px solid #ddd;
    background-color: transparent;
    color: #ddd;
    cursor: pointer;
    padding: 13px 15px;
    border-radius: 50%;
    outline: none;
  }

  .buttons button:hover {
    border: 2px solid #fff;
    background-color: #fff;
    color: #333;
  } */


    
    </style>