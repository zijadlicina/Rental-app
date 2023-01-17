export let menuItems = [
    {
        name: "menu-icon",
        auth: false,
        to: ""
    },
    {
        name: "home",
        auth: false,
        to: "/home"
    },
    {
        name: "rental",
        auth: false,
        to: "/rental"
    },
    {
        name: "my rents",
        auth: true,
        to: "/rents"
    },
    {
        name: "about",
        auth: false,
        to: "/about"
    },

]
export let menuItemsRight = [
    {
        name: "log in",
        to: "/login"
    },
    {
        name: "sign up",
        to: "/register"
    },

]
export let moreOptions = [
    {
        name: "log out",
        value: false
    },
    {
        name: "setting",
        value: false
    }
]
export let messagesOptions = [
    {
        name: "My Rents: ",
        value: true
    }
]