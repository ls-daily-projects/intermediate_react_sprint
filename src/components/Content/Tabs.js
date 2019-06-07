import React from "react"
import { arrayOf, string } from "prop-types"

import Tab from "./Tab"

const Tabs = ({ tabs, ...rest }) => {
    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">TRENDING TOPICS:</span>
                {tabs.map(tab => (
                    <Tab {...rest} key={tab} tab={tab} />
                ))}
            </div>
        </div>
    )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
    tabs: arrayOf(string)
}

export default Tabs
