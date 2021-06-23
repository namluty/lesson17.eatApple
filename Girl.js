class Girl {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    say(text) {
        alert(this.name + "Táo này ngon");
    }
    eatApple(Apple){
        if (Apple.weight > 0){
            this.weight += 1;
            Apple.weight -=1;
            alert(this.name + "Đã ăn Quá Táo");
            alert(Apple.weight);
        } else {
            alert("Hết rồi");
        }
    }
}