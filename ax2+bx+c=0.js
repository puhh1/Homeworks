/*
function ax2BxC0(a,b,c,) {
    let D = b*b + 4*a*c;
    const sqrD = Math.sqrt(D);
    return  x1 = (-b + sqrD) / 2 , x2 = (-b - sqrD) / 2;
}
console.log(ax2BxC0(2,3,2))
console.log(`Корни уравнения: `, x1,',', x2);


 */
class ax2BxC0 {
    constructor(options) {
        this.a = options.a
        this.b = options.b
        this.c = options.c
        this.x1 = options.x1
        this.x2 = options.x2
    }

    get solution(){
        let D = this.b*this.b + 4*this.a*this.c;
        const sqrD = Math.sqrt(D);
        checked.push(this.x1 = (-this.b + sqrD) / 2 , this.x2 = (-this.b - sqrD) / 2)
    }
}

let checked = [];

class Values extends ax2BxC0 {

}

const values = new ax2BxC0({
    a:2,
    b:3,
    c:2,
})
console.log(values.solution)
console.log(checked)