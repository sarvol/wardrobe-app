




<script>
import {auth, googleProvider} from ".././firebase.js"
import {authState} from "rxfire/auth"


let user;
	
const unsubscribe = authState(auth).subscribe(u => user = u)


 	const login = () => {
	auth.signInWithPopup(googleProvider)
}

const logout = () => {
	auth.signOut()
}




</script>

<header>
	<nav class="top-menu">
				<div class="blue">
					<a  class="center"  href="/" >C.L.E.</a>
				</div>
				<div>
				</div>
				<div>
					<a   class="left" href="/" >Klesskap</a>
				</div>
				<div >
					<a  class="left" href="/" >Profil</a>
				</div>
			</nav>
</header>



<style>

nav.top-menu {
	position: fixed;
   	width: 100%;
    height: 4rem;
    background-color: white;
    display: grid;
    grid-template-columns: 5fr 2fr 2fr 2fr  ;
	align-items: center;
	z-index: 1;
	margin: 0;
	
}

.top-menu  > div {
	height: 100%;
	border: 1px solid black;
	color: black;	
	display: grid;
	justify-content: center;
	align-items: center;
	
}



nav.top-menu div a {
	justify-content: center;	
	padding: 0.5rem;
		
}


a {
	color: black;
	text-decoration: none;
}
.left {
    opacity: 0;
}

.top-menu .center {
    display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 500;
}


.blue {
	background-color: #373F5D;
	color: white;
	font-size: 1.8rem;
	letter-spacing: 0.5rem;
}




a:hover {
	text-decoration: underline;
	transition: 3s;
}


a:visited {
	color: black;
}






</style>