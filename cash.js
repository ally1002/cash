document.getElementById('number').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');

    const cashMachine = (amount) => {
        let result = [];
        const notes = [100, 50, 10, 5, 1];

        notes.sort((a, b) => b - a);
        notes.map((note) => {
            let count = Math.floor(amount / note);
            amount = amount % note;
            result.push({ note, count })
        });

        return result;
    }

    const money = cashMachine(this.value);
    let html = '';
    money.map((cash) => {
        if (cash.count == 0) return;
        html += `<div class="card-note">
                    <div class="note">${cash.note}</div>
                    <div class="amount">${cash.count}</div>
                </div>`;
    });

    document.getElementById('list').innerHTML = html;
});
