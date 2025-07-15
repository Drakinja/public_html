
let container = document.getElementById("container")
let cells = container.children
console.log(cells)
//index of the cell
function onmouseclick(index) {
    let clicked_cell = [index];
    let clicked_inner_cell = clicked_cell.firstElementChild
    if (clicked_inner_cell.innerHTML != '') {
        return;
    }


    clicked_inner_cell.innerHTML = 'X'
    let enemy_choices = [0, 1, 2, 3, 4,];
    while (enemy_choices.length > 0) {
        let enemy_choice_index = Math.floor(math.random() * enemy_choices.length);
        let enemy_choice = enemy_choices.splice(enemy_Choice_index, 1);

        let enemy_clicked_cell = [enemy_choice];
    let enemy_clicked_inner_cell = enemy_clicked_cell.firstElementChild
    if (enemy_clicked_inner_cell.innerHTML != '') {
        continue;
    }

    enemy_clicked_cell.firstElementChild.innerHTML = 'O'
    return;
    }

   

}
