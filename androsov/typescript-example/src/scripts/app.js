var User = /** @class */ (function () {
    function User(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    ;
    User.prototype.toString = function () {
        return "Name : " + this.name + " <br> Age : " + this.age + " <br> Weight " + this.weight + " <br><br>";
    };
    return User;
}());
function outputUsers(input, radioButtons) {
    var more = radioButtons.find(function (btn) { return btn.value === 'more'; }).checked;
    el.innerHTML = users.filter(function (user) {
        var value = +input.value;
        return more ? user.age > value : user.age < value;
    }).map(function (user) { return user.toString(); })
        .reduce(function (prev, cur) { return prev + cur; }, '');
}
var el = document.getElementById('content'), names = ['Alex', 'Tom', 'Dina', 'Emily', 'Andrew', 'Dora'], users = names.map(function (name) { return new User(name, Math.round(17.5 + Math.random() * 53), Math.round(49.5 + Math.random() * 51)); }), input = document.querySelector('input'), radioButtons = Array.from(document.querySelectorAll('input'))
    .filter(function (el) { return el.type === 'radio' && el.name === 'comparator'; });
el.innerHTML = users.map(function (user) { return user.toString(); })
    .reduce(function (prev, cur) { return prev + cur; }, '');
input.addEventListener('change', function (event) { return outputUsers(event.target, radioButtons); });
for (var _i = 0, radioButtons_1 = radioButtons; _i < radioButtons_1.length; _i++) {
    var btn = radioButtons_1[_i];
    btn.addEventListener('change', function () { return outputUsers(input, radioButtons); });
}
