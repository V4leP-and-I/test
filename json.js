var mydata = JSON.parse(data);
// console.log(Object.keys(mydata).length);
// console.log(mydata); 
// console.log(mydata.cards);
console.log(mydata.cards.lenght);

var cnt = 0;

const colors = ['red', 'blue', 'yellow'];

var main_block = document.querySelector(".content");
for (let i=0; i<Object.keys(mydata.cards).length; i++) {
    if (cnt == 3){cnt = 0};
    // console.log(mydata.cards);
    var block = document.createElement("div");
    block.className = "card";
    block.setAttribute('data-name', mydata.cards[i].type);
    block.setAttribute('data-color', colors[cnt]);
    block.setAttribute('data-date', mydata.cards[i].date);

    if (cnt == 0){
        block.style.backgroundColor = "#FAF0FF";
    }
    else if (cnt == 1){
        block.style.backgroundColor = "#E6FFFE";
    }
    else{
        block.style.backgroundColor = "#FEFFF0";
    }
    // cnt += 1;

    // main_block.append(block);

    var img = document.createElement("img");
    // console.log(mydata.cards[i].pic);
    img.src = mydata.cards[i].pic
    block.append(img);

    var card_content = document.createElement("div");
    card_content.className = "card_content";

    var cars_name = document.createElement("a");
    cars_name.className = "cars_name";
    cars_name.append(mydata.cards[i].title);
    card_content.append(cars_name);

    var card_text = document.createElement("a");
    card_text.className = "card_text";
    card_text.append(mydata.cards[i].descr);
    card_content.append(card_text);

    var but_c = document.createElement("button");
    but_c.className = "but_c";
    but_c.append("Подробнее");

    if (cnt == 0){
        but_c.style.backgroundColor = "#FAF0FF";
        but_c.style.outline = "1px solid #D585FD";
    }
    else if (cnt == 1){
        but_c.style.backgroundColor = "#E6FFFE";
        but_c.style.outline = "1px solid #0C7D78";
    }
    else{
        but_c.style.backgroundColor = "#FEFFF0";
        but_c.style.outline = "1px solid #717722";
    }

    card_content.append(but_c);
    block.append(card_content);
    main_block.append(block);

    cnt +=1;
}

// фильтр
const filterbox = document.querySelectorAll('.card');
document.querySelector('#type').addEventListener('change', function(){
    const selectedValue = this.value;
    filterbox.forEach(function(item){
        if (selectedValue==='all'){
            item.style.display = 'block';
        }
        else{
            if(item.getAttribute('data-name') === selectedValue){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
        }
    });
});



document.querySelector('#date').addEventListener('change', function(){
    const selectedValue = this.value;
    // console.log(selectedValue);
});

document.querySelector('#color').addEventListener('', function(){
    const selectedValue = this.value;
    console.log(selectedValue);
});


