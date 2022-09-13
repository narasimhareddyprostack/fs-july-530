class Parent {
    assets = '100CR'
    get_Good_Qualities() {
        console.log("All Parent are Good")
    }
}
class Child extends Parent {
    get_Naughty_Qualities() {
        console.log("All Children are naughty")
    }
}
let c1 = new Child();
console.log(c1.assets)
c1.get_Good_Qualities()
c1.get_Naughty_Qualities()