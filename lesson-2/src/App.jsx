import Movie from "./Movie";
import './App.css'

function App (){

   const MovieList = [
       
       "https://rachel.on.ge/2018/11/02/1541153564.jpg",
       "https://gioggg.tv/uploads/posts/2020-09/1601472439_titanic-background.jpg",
       "https://srulad.com/assets/uploads/posters/1772/1772_c54e6f7dd4dacc1ac5b0fa66565a4a60.jpg"

   ];

  return(
    <div className="movieDiv">

      {MovieList.map(movie => {
       <Movie/>
      })}


     
    </div>
  )
}

export default App