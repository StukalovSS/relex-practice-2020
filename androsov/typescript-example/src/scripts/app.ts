class User {
    constructor(public name: string, public age: number, public weight: number) {};
    toString() {
        return `Name : ${this.name} <br> Age : ${this.age} <br> Weight ${this.weight} <br><br>`;
    }
}

function outputUsers(input, radioButtons) {
    let more: boolean = radioButtons.find( btn => btn.value === 'more').checked;

    el.innerHTML = users.filter( user => {
            let value: number = +input.value;
            return more ? user.age > value : user.age < value;
        } ).map( user => user.toString() )
            .reduce( (prev, cur) => prev + cur, '');
}

const el = document.getElementById( 'content' ),
    names = ['Alex', 'Tom', 'Dina', 'Emily', 'Andrew', 'Dora'],
    users = names.map( name => new User(name, 
        Math.round( 17.5 + Math.random() * 53 ),
        Math.round( 49.5 + Math.random() * 51 ) ) ),
    input = document.querySelector( 'input' ),
    radioButtons = Array.from( document.querySelectorAll( 'input' ) )
        .filter( el => el.type === 'radio' && el.name === 'comparator');

el.innerHTML = users.map( user => user.toString() )
        .reduce( (prev, cur) => prev + cur, '');

input.addEventListener( 'change' , event => outputUsers(event.target, radioButtons) );

for (let btn of radioButtons) {
    btn.addEventListener( 'change', () => outputUsers( input, radioButtons ) );
}
