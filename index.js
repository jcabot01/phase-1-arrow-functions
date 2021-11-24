//1 & 2
let para1 = 2000
let para2 = 100
const divide = function() {
    return para1 / para2;
}
divide();

//3 & 4
const square = (para3) => para3 ** 2;

//5 & 6
const add = (para4, para5) => para4 + para5;
/*
describe("index.js", () => {
  it("has a function expression called divide", () => {
    expect(divide).to.exist
  })

  it("divide divides 2000 by 100", () => {
    expect(divide()).to.equal(20)
  })

  it("has an arrow function called square", () => {
    expect(square).to.exist
  })

  it("square arrow function takes one parameter and multiplies it times itself", () => {
    let x = 2
    expect(square(x)).to.equal(4)
  })

  it("has an arrow function called add", () => {
    expect(add).to.exist
  })

  it("add arrow function takes two parameters and adds them together", () => {
    let a = 3
    let b = 4
    expect(add(a,b)).to.equal(a+b)
  })
})
*/