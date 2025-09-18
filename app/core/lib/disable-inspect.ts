"use client";

import toast from "react-hot-toast"

const hostName = window.location.host

document.body.onkeydown = (e: any) => {
    if (e.key == "F12" && !hostName.includes("localhost")) {
        toast.error("Yo, what you looking for? 😜")
        return false
    }
}