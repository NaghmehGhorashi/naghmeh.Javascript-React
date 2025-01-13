// TODO: Clear all items from localStorage
localStorage.clear()

// TODO: Add an object to localStorage
const myObject={ name:"naghmeh",Age:20 }
localStorage.setItem("myObject",JSON.stringify(myObject))

// TODO: Get an object from localStorage
const myobject={ name:"naghmeh",Age:20 }
JSON.parse(localStorage.getItem(myobject))

// TODO: Set item in sessionStorage
sessionStorage.setItem("them",dark)

// TODO: Get item from sessionStorage
sessionStorage.getItem("them")

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("them")

// TODO: Clear all items from sessionStorage
sessionStorage.clear("them")

// TODO: Add an object to sessionStorage
const Myobject={ name:"naghmeh",Age:20 }
sessionStorage.setItem("them" ,JSON.stringify(myObject))

// TODO: Get an object from sessionStorage
const MyObject={ name:"naghmeh",Age:20 }
JSON.parse(sessionStorage.getItem( "MyObject"))