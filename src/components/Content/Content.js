import React, { Component } from "react"

import Tabs from "./Tabs"
import Cards from "./Cards"
import Carousel from "../Carousel/Carousel"

import { tabData, cardData } from "../../data"

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "all",
            tabs: [],
            cards: []
        }
    }

    componentDidMount() {
        this.setState({ ...this.state, tabs: tabData, cards: cardData })
    }

    changeSelected = tab => {
        this.setState({ ...this.state, selected: tab })
    }

    filterCards = () => {
        return this.state.selected === "all"
            ? this.state.cards
            : this.state.cards.filter(({ tab }) => tab === this.state.selected)
    }

    render() {
        return (
            <div className="content-container">
                <Tabs
                    tabs={this.state.tabs}
                    selectedTab={this.state.selected}
                    selectTabHandler={this.changeSelected}
                />
                <Carousel />
                <Cards cards={this.filterCards()} />
            </div>
        )
    }
}
