import { Component } from 'react';


class Console extends Component {
    constructor() {
        super()
        this.state = {
            messages : [
                        {quote : 'Frankly, my dear, I don’t give a damn about frameworks', film: 'Gone with the Wind, 1939'},
                        {quote : 'May the JS be with you', film: 'Star Wars, 1977'},
                        {quote : 'I’m going to make him an App he can’t refuse', film: 'The Godfather, 1972'},
                        {quote : 'Of all the IDE extensions in all the world, she had to download mine.', film: 'Casablanca, 1942'},
                        {quote : 'The first rule of Javascript is you do not talk about Frameworks', film: 'Fight Club, 1999'},
                        {quote : 'I see missing SemiColons', film: 'The Sixth Sense, 1999'},
                        {quote : 'You can’t handle the Uncaught TypeError!', film: 'A Few Good Men, 1992'},
                        {quote : 'Here’s the next FRAMEWORK', film: 'The Shining, 1980'},
                        {quote : 'Say hello to my little Regex', film: 'Scarface, 1983'},
                        {quote : 'Interpreted, not Compiled', film: 'Goldfinger, 1964'},
                       ]
        }
        this.m = Math.floor(Math.random() * 10)
    }
    random() {
        return this.m
    }
    quoteOutput() {
    return this.state.messages[this.random()].quote
    }
    filmOutput() {
    return this.state.messages[this.random()].film
    }
    render () {
        console.log(`%c ${this.quoteOutput()} `, 'font-size: 2rem; font-style: italic; color: #000', `${this.filmOutput()}`)
        return null
    }
}

export default Console;