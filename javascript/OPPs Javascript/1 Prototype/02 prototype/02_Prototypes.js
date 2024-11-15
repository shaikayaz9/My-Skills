const employee = {
    caltax(){
        console.log("tax rate is 10% for bike")
    },
    caltax2: function(){
        console.log("tax rate is 20 for cars ")
    }
}

const karan = {
    salery :300000,
    caltax:function(){
        console.log("tax rate is 30% for rich people") // if object & prototype have same method , objects method will be used.
    }
} 

karan.__proto__ = employee