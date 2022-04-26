import { animals } from './animals';
import ReactDOM from 'react-dom';
import React from 'react';
const title = "welcome to our beautifull Show  ";
const background = (
  <img 
className='background' 
alt='ocean' 
src='/images/ocean.jpg'/>
);

const images = [];
for( const animal in animals ){
  images.push(
    <img  
    key= {animal}
    className = 'animal'
    alt = {animal}
    src= {animals[animal].image}
    ariaLabel= {animal}
    role= 'button'
    onClick={displayFact}
     />
    
     )
};


function displayFact(e){
const selectedAnimal = e.target.alt;
const animalsInfos = animals[selectedAnimal];
const optionIndex = Math.floor(Math.random() * animalsInfos.facts.length)

const funFuct = animalsInfos.facts[optionIndex];
document.getElementById('fact').innerHTML = funFuct;
}
const showBackground = true ;

const animalFacts = ( 
<div>
<h1>{title || 'Click an animal for a fun fact'} </h1>
<p id='fact'> </p>
{ showBackground && background}
<div className='animals'>
{images}
</div>

</div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));