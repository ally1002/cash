const cashMachine = (amount) => {
    const notes = [100, 50, 20, 10, 5, 2, 1];
    let result = [];

    notes.map((note) => {
        let count = Math.floor(amount / note);
        amount = amount % note;
        result.push({ note, count })
    });

    return result;
}

const randomNumber = parseInt(Math.random() * 1000);
const money = cashMachine(randomNumber)
let html = '';

money.map((cash) => {
    if (cash.count != 0) {
        html += `<div class="card-note">
                    <div class="note">${cash.note}</div>
                    <div class="amount">${cash.count}</div>
                </div>`;
    }
});

document.querySelector('.number').innerHTML = 'R$ ' + randomNumber;
document.getElementById('list').innerHTML = html;