import { atom } from "recoil";

export const darkModeState = atom({
    key: "darkModeState",
    default: false
})

export const handleUrl = atom({
    key: "handleUrl",
    default: ""
})

export const handleTag = atom({
    key: "handleTag",
    default: ""
})