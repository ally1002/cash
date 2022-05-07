const cashMachine = async (amount) => {
    let result = [];
    const notes = [100, 50, 20, 10, 5, 2, 1];
    notes.sort((a, b) => b - a);

    notes.map((note) => {
        let count = Math.floor(amount / note);
        amount = amount % note;
        result.push({ note, count })
    });

    return result;
}

const randomNumber = parseInt(Math.random() * 500);
document.querySelector('.number').innerHTML = 'R$ ' + randomNumber;

const money = await cashMachine(randomNumber);

let html = '';
money.map((cash) => {
    if (cash.count != 0) {
        html += `<div class="card-note">
                    <div class="note">${cash.note}</div>
                    <div class="amount">${cash.count}</div>
                </div>`;
    }
});

document.getElementById('list').innerHTML = html;