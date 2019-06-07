import React, { Component } from "react"

import { carouselData } from "../../data"

export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrls: [],
            selectedIndex: 0
        }
    }
    componentDidMount() {
        this.setState({ ...this.state, imageUrls: carouselData })
    }

    leftClick = () => {
        const { selectedIndex, imageUrls } = this.state
        this.setState({
            ...this.state,
            selectedIndex:
                selectedIndex === 0 ? imageUrls.length - 1 : selectedIndex - 1
        })
    }

    rightClick = () => {
        const { selectedIndex, imageUrls } = this.state
        const lastIndex = imageUrls.length - 1
        this.setState({
            ...this.state,
            selectedIndex: selectedIndex === lastIndex ? 0 : selectedIndex + 1
        })
    }

    render() {
        return (
            <div className="carousel">
                <div className="left-button" onClick={this.leftClick}>
                    {"<"}
                </div>
                {this.state.imageUrls.map((url, i) => (
                    <img
                        key={url}
                        src={url}
                        style={{
                            display:
                                this.state.selectedIndex === i
                                    ? "block"
                                    : "none"
                        }}
                    />
                ))}
                <div className="right-button" onClick={this.rightClick}>
                    {">"}
                </div>
            </div>
        )
    }
}
