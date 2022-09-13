class Employee {
    eid;
    ename;
    setEid(id) {
        this.eid = id;
    }
    getEid() {
        return this.eid
    }
    setEname(name) {
        this.ename = name
    }
    getEname() {
        return this.ename
    }

}

let e1 = new Employee()
e1.setEid(101)
e1.setEname("Rahul Gandhi")
console.log(e1)
console.log(e1.getEid())
console.log(e1.getEname())

let e2 = new Employee()
e2.setEid(102)
e2.setEname("Sonia")
console.log(e2)
console.log(e2.getEid())
console.log(e2.getEname())