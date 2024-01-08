class Coder {

  secondLang!: string

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age} years old.`
  }
}
const Dave = new Coder('Dave', 'Rock', 42)

console.log(Dave.getAge())

class webDev extends Coder {
  constructor(public computer: string, name: string, music: string, age: number) {
    super(name, music, age)
  }

  public getLang() {
    return `My favorite language is ${this.lang}`
  }
}
const Sarah = new webDev('Mac', 'Sarah', 'Pop', 28)
console.log(Sarah.getLang());
console.log(Sarah.age);
