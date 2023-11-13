import './Movie.css'

const Movie = (props) => {

    return (
        <div className="fotoDiv">
            
          <img  
          
          src={props.image} alt="" />
          {props.time}
          {props.title}
        </div>
    )

}

export default Movie