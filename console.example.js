const cashMachine = (amount) => {
    const notes = [100, 50, 10, 5, 1];
    notes.sort((a, b) => b - a);

    notes.map((note) => {
        const count = Math.floor(amount / note);
        const plural = count > 1 ? 's' : '';
        amount = amount % note;

        if (count == 0) return;
        console.log(`${count} nota${plural} de R$ ${note}`);
    });
}