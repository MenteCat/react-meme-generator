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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
          this.setState({allMemeImages: memes})
        })
   }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
    
  }

  /** Method that when the "Gen" button is clicked, chooses one of the
  memes from our `allMemeImages` array randomly and makes it so that is the
  meme image that shows up in the bottom portion of the meme generator site */

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
    const randMemeImage = this.state.allMemeImages[randNum].url
    this.setState({randomImage: randMemeImage})
  }



  render() {
    return(
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}     
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}     
          />
          
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt=""/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}


export default MemeGenerator