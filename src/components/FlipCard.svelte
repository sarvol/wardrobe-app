
<main>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Visste du at?</h1>
    </div>
    <div class="flip-card-back">
      <p> Det er mange grunner til at vi velger å kjøpe nytt. Alt fra nye funksjoner, trender, ny design, er med og øker kjøpelysten. Samtidig blir hvert femte plagg aldri eller svært sjeldent brukt. Hver av oss har dessuten i snitt 80 kg klær hver. Som en konsekvens av det høye forbruket har tekstilavfallet fra private husholdninger økt med 80 prosent i løpet av 15 år. </p>
     
      
    </div>
  </div>
</div>

</main>



<style>


.flip-card {
    margin: auto auto;
    background-color: transparent;
    width: 22rem;
    height: 12rem;
    perspective: 1000px; 
    cursor: pointer;
    
   
}


.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;

}


.flip-card-front {
  background-color: #F75D5D;
  
}


.flip-card-back {
  background-color: #373F5D;
  color: white;
  transform: rotateY(180deg);
}

h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
     height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    margin: 0;
    
}

p {
    color: white;
    font-size: 0.8rem;
    font-weight: 300;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 0 ;
    margin: 0;
    text-align: left;
    
    
}

</style>