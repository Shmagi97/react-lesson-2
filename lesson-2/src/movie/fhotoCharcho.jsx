import Fhotous from './fhoto.jsx';
import './fhotoCharcho.css'



function Charcho (){

    const fotoMasiv =  [
        "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg",
        "https://www.sideshow.com/storage/product-images/908079/batman_dc-comics_square.jpg",
        "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/2ef40d26-5759-4a86-b540-b72fa3b4d62d/new-poster-art-for-godzilla-minus-one-sees-godzillia-preparing-to-unleash-an-atomic-blast.jpg",
    
    ];

    return (
        
        
        
        <section className="charcho">


         
         {fotoMasiv.map(poster =>{
            
           <Fhotous/>
    
         })}
         
       
         
         
        

        </section>
        
       
    )
}

export default (Charcho)