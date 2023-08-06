import React from "react"
import Search from "./Search"

export default {
    label : 'Search Input Text',
    component : Search
}

export const inputSizeSmall = () => <Search myVal='inputSizeSmall' />
export const inputSizeMedium = () => <Search myVal='inputSizeMedium'/>
export const inputSizeLarger = () => <Search myVal='inputSizeLarger'/>