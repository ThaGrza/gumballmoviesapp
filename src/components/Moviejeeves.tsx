import React, { Component } from 'react';
import {View, StyleSheet, Text } from "react-native";
import axios from "../routes/axios"

const language: string = "&language=en-US";
const similarSearch: string = "/similar?api_key=";

class Moviejeeves extends Component {
  constructor(props: any){
    super(props);
    this.state = {
      movieDisplay: "",
      movieImg: "",
      movieTitle: "",
      description: "",
      similarMovies: "",
      movieId: 0,
      movieImageNotFound: "https://media1.tenor.com/images/ef4c232dab28b7581497cee047f21969/tenor.gif?itemid=5521264"
    };
    this.searchChange = this.searchChange.bind(this);
    this.randomizer = this.randomizer.bind(this);
    this.getSimilar = this.getSimilar.bind(this);
  }

  searchChange(event){
    this.randomizer(event);
  };

  getSimilar(event){
    let query = this.state.movieId + similarSearch + TMDB_API_KEY + language;
    axios.get(query)
      .then(res => {
      console.log(res);
      let simResults = Math.floor(Math.random() * res.data.results.length)
      console.log(simResults);
      if(res.data.adult === true || res.data.results[simResults].backdrop_path === null){
        this.getSimilar();
      }else{
        this.setState({movieTitle: res.data.results[simResults].title})
        this.setState({movieImg: res.data.results[simResults].backdrop_path})
        this.setState({releaseDate: res.data.results[simResults].release_date})
        this.setState({description: res.data.results[simResults].overview})
        this.setState({movieDisplay: true});
        this.setState({similarMovie: true});
      }
    })
    .catch(err => {
      if(err.response === 'TypeError'){
        this.randomizer();
        console.log(err);
      }else{
        this.setState({movieDisplay: false})
        this.setState({movieTitle: "No Similar Movies Found, Try Finding Another Movie"})
        console.log(err);
        }
    });
  }

  randomizer(event){
    let randomMovie = Math.floor(Math.random() * 300000) + 1;
    let query = baseUrl + randomMovie + '?api_key=' + key + language;
    this.setState({movieId: randomMovie})
    this.getMovie(query);
  }

  getMovie(query){
    axios.get(query)
      .then(res => {
        console.log(res);
        if(res.data.adult === true || res.data.backdrop_path === null){
          this.setState({similarMovie: false});
          this.randomizer();
        }else{
          this.setState({movieDisplay: true});
          this.setState({similarMovie: true});
          this.setState({movieTitle: res.data.title})
          this.setState({movieImg: res.data.backdrop_path})
          this.setState({releaseDate: res.data.release_date})
          this.setState({description: res.data.overview})
        }
      })
      .catch(err => {
        if(err.response.status === 404){
          this.randomizer();
        }
        console.log(err);
    });
  }

  render(){
    return(
      <View style={styles.movieContainer}>
        {this.state.movieDisplay === false && <View style={styles.movieDisplay}>
          <img src={this.state.movieImageNotFound} style={styles.movieImage} alt='Not Found'/>
          <Text style={styles.noMovieFound}> {this.state.movieTitle}</Text>
          </View>
        }

        {this.state.movieDisplay === true && <View style={styles.movieDisplay}>
          <img src={'https://image.tmdb.org/t/p/w500/' + this.state.movieImg} style={styles.movieImage} alt='Found'/>
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{this.state.movieTitle}</Text>
            <Text style={styles.movieDescription}>{this.state.description}</Text>
          </View>
        </View>
        }
        <View style={styles.buttonContainer}>
          <button style={styles.findMovieButton} onClick={this.searchChange}>Randomizer</button>
        { this.state.similarMovie === true &&
          <button style={styles.findMovieButton} onClick={this.getSimilar}>Similar To This</button>
        }
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  // movieContainer
  // buttonsContainer
  // genreButton
  // buttonContainer
  // findMovieButton
  // findMovieButton:active
  // movieDisplay
  // movieimage
  // movieInfo
  // movieTitle
  // movieDescription
  // noMovieFound
})


export default Moviejeeves;