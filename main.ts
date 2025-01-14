console.log();

const body = document.querySelector("body")
const hello = document.createElement("p")
hello.textContent = "Hello"
const helloFun = ()=>{body?.appendChild(hello)}
helloFun()
const twoNums = (num1:number, num2:number)=> num1 + num2
console.log(twoNums(1,2));
const alertFun = (num1:number,num2:number)=> window.alert(num1 * num2) 
// alertFun(2,3)
const fourFun = (obj: object) => {
    Object.keys(obj).forEach(key => console.log(key));
};

//:

type Monster = {
    name: string
    type: string
    health: number
    strength: number
    speed: number
}

function createMonster(
    name: string,
    type: string,
    health: number = 100,
    strength: number = 50,
    speed: number = 25
): Monster { 
    const monster: Monster = {
        name,
        type,
        health,
        strength,
        speed,
    }
    return monster
}   
const monster1 = createMonster("Tabaluga", "Drache");
console.log(monster1);
const monster2 = createMonster("Spongebob", "Schwamm");
console.log(monster2);
const monster3 = createMonster("Bob der Baumeister", "Baumeister");
console.log(monster3);

//: 

const colors = [
    { col: "#ff6347", background: "linear-gradient(45deg, #ff6347 50%, teal 50%)", text: "#ffffff" },
    { col: "#4682b4", background: "linear-gradient(45deg, #4682b4 50%, white 50%)", text: "#f0f8ff" },
    { col: "#32cd32", background: "linear-gradient(45deg, #32cd32 50%, rebeccapurple 50%)", text: "#000000" },
    { col: "#ffd700", background: "linear-gradient(45deg, #ffd700 50%, black 50%)", text: "#4b0082" }
  ];
  
  const changeColors = (background: string, text: string): void => {
    const firstColor = background.match(/#\w+/)?.[0] || "";
    document.body.style.backgroundColor = firstColor;
    const heading = document.querySelector("h1");
    if (heading) {
      heading.style.color = text;
    }
  };
  
  const createBälle = (color: { background: string; text: string }): HTMLDivElement => {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.background = color.background;
    ball.addEventListener("click", () => changeColors(color.background, color.text));
    return ball;
  };
  
  const bälle = (): void => {
    const container = document.querySelector(".ball-sack");
    if (container) {
      colors.forEach(color => {
        const ball = createBälle(color);
        container.appendChild(ball);
      });
    }
  };
  
  bälle();
  