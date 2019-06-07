import React from "react"
import classNames from "classnames"
import { string, func } from "prop-types"

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
    return (
        <div
            className={classNames("tab", { "active-tab": selectedTab === tab })}
            onClick={() => selectTabHandler(tab)}
        >
            {tab.toUpperCase()}
        </div>
    )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
    tab: string.isRequired,
    selectedTab: string.isRequired,
    selectTabHandler: func.isRequired
}

export default Tab
