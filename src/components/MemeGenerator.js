import React, {Component} from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText:"",
      bottomTex:"",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: []
    }
  }
  // API that provides meme images. API call:
   componentDidMount() {
     fetch("https://api.imgflip.com/get_memes")
        //  this will return a promise 
        .then(response => response.json())
        // then the actual response
        .then(response =>{
          // pull the memes array from response.data
          const {memes} = response.data
          console.log(memes[0])
          this.setState({allMemeImages: memes})
        })
   } 



  render() {
    return(
      <div>
        <form className="meme-form">
          {
            
          }
          <button>Gen</button>

        </form>
      </div>
    )
  }
}





export default MemeGenerator