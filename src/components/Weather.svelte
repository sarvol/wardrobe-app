

<script>
import { fly, fade } from 'svelte/transition'
import axios from "axios"
import Loader from "./Loader.svelte"


const appid_openweather = "YOUR API KEY"
let loading = false
let city = "" 
let temp = ""
let feelLike = ""
let humidity = "" 
var disc = ""
let incomeData =null
let weather =""
let wind = ""
let icon = ""
let rain =""

 const submitHandler = () => {
    
    loading = true
    console.log(city)

    axios 
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appid_openweather}&units=metric`
        
      )

    .then(data => {
        
        loading = false
        console.log(data.data)
        incomeData = data.data
        let rain = incomeData.main.rain
        icon = `http://openweathermap.org/img/wn/${incomeData.weather[0].icon}@2x.png` 
        weather = incomeData.weather[0].main
        temp = incomeData.main.temp
        feelLike = incomeData.main.feels_like
        humidity = incomeData.main.humidity
        wind = incomeData.wind.speed
        console.log(weather + "" + temp + " " + humidity + " " + wind)

})
};



</script>


   <main>
   

   <div 
        in:fly="{{ x: -400, duration: 1000, delay: 1000 }}" 
        out:fly="{{ x: -400, duration: 300 }}"  
        class="weatherBox"
   >
        <h2>Sjekk været der du er</h2>
        <form class="forminput" on:submit|preventDefault={submitHandler}>
            <input bind:value={city} placeholder="Skriv inn by" />
        <button>Søk</button>
        </form>

    {#if incomeData!==null}
        
        <div 
            in:fade="{{ duration: 1000, delay: 1500 }}" 
            out:fly="{{ x: -400, duration: 300 }}" 
            id="city"
        >
            <div>
                <p style="margin:0;">{city}  </p>   
            </div>
            
         </div>
        
        <div id="icon"> 
            <p  > <img src={icon} in:fly="{{ x: -400, duration: 1500, delay: 1000 }}"   alt="ikon for vær"> </p>
        </div>


        <div 
            in:fade="{{ duration: 1000, delay: 1000 }}" 
            out:fly="{{ x: -400, duration: 300 }}" 
            id="boxTemp"
        > 
            <div> 
        <p ><b> Vær:</b> </p>
        <p> {weather} </p>
    </div>

    

    <div> 
        <p ><b> Temp:</b> </p>
        <p> {Math.round(temp)} C° </p>
    </div>
    <div> 
        <p ><b> Føles som:</b> </p>
        <p> {Math.round(feelLike)} C° </p>
    </div>

    <div>
    <p><b> Vind: </b>  </p>
    <p> {Math.round(wind)} m/s </p>
    </div>

    <div>
        <p><b> Fuktighet: </b></p>  
        <p> {Math.round(humidity)} % </p>  
    </div> 

    <div>
        <p><b> Regn: </b></p>  
        <p> {Math.round(rain)} mm </p>  
    </div>    
        </div>
        
    {:else}
        <Loader />

      {/if}  
    </div>

    <div>
        <h1 
            in:fly="{{ x: 400, duration: 1000, delay: 1000 }}" 
            out:fly="{{ x: 400, duration: 300 }}"
        >
            Husket å sjekke været?
        </h1>
        <img 
            in:fly="{{ x: 500, duration: 1000, delay: 1400 }}" 
            out:fly="{{ x: 400, duration: 300 }}" 
            id="weatherThinking" src="././img/weather.png" alt="illustrasjon av jente som tenker på været" 
        />

    
    </div>
    
   </main>
  

  <style>
    main {
        display: grid;
	    grid-template-columns: 1fr 2fr;
        background: rgb(227,241,248);
        background: linear-gradient(0deg, rgba(227,241,248,1) 12%, rgba(255,255,255,0.9290091036414566) 73%);
        height: 100%;  
    }

    h2 {
        color: white;
        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 6rem;
    }

    input, button {
        outline: none;
        margin-top: 0.2rem;
        padding: 1rem;
    }

    button {
        background-color: white;
        color: #F75D5D;
         border: #F75D5D;
    }

    button:hover {
        background-color: #F75D5D;
        color: #373F5D;
        border: #F75D5D;
        transition: 0.3s ease;
    }


    #icon {
        grid-column: 1/-1;
    }

    #icon img {
        background-color: #F75D5D;
        border-radius: 50%;
        padding: 0.2rem;
    }

    
    .weatherBox {
        background-color: #373F5D;
        height: 100%;
    }

    #weatherThinking {
        width: 70%; 
    }

    #boxTemp {
        display: grid;
	    grid-template-columns: repeat(3, 1fr) ;
        color: white;    
    }

    #city {
        display: grid;
	    grid-template-columns:  1fr;
        color: white;
        font-size: 3rem;
        margin: 3rem 0 2rem 0;
    }

    h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
}


    @media (max-width: 1100px) {
        main {
	    grid-template-columns: 1fr; 
    }

    .weatherBox {
        width: 100%;
        padding-bottom: 2rem;
        order: 2;
       
    }

    #weatherThinking {
        order: 1;
        width: 60%;
        margin: auto auto;
    }
    }

    @media (max-width: 800px) {
    
    .weatherBox {
        
        order: 2;
        margin: 0;
        margin-top: 3rem;
    }

    #weatherThinking {  
        width: 70%;   
    }

    
    }

    @media (max-width: 500px) {
    
    .weatherBox {  
       width: 100vw;
        margin: 0;    
    }
    #boxTemp {
	    grid-template-columns: repeat(2, 1fr) ; 
    }

    }



    
  </style>