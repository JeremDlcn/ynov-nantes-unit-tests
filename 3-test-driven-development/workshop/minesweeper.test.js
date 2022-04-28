const { createBoard } = require('./minesweeper');

describe("MineSweeper", function() {
    test(`Give a "n" x "m" board`, function() {
        //GIVEN
        const n = 3;
        const m = 3;

        //WHEN
        const result = createBoard(n, m);

        //THEN
        const output = `...\n...\n...\n`;

        expect(result).toBe(output);
    });

    test('if n multiply by m is less or equal than 100', function() {
        const m = 3;
        const n = 3;
        expect(m * n).toBeLessThanOrEqual(100);
    });

    test('check if m multiply by n is greater than 0', function() {
        const m = 3;
        const n = 3;
        expect(m * n).toBeGreaterThan(0);
    });

    test(`Check if m and n or equal 0, then Game Over`, function() {
        //GIVEN
        const n = 1;
        const m = 0;

        //WHEN
        const result = createBoard(n, m);

        //THEN
        const output = `Game Over`;

        expect(result).toBe(output);
    });

    test(`check if number of mine is greater than 0`, function() {
        //GIVEN
        const n = 3;
        const m = 3;
        const mine = 2;

        //WHEN
        const result = createBoard(n, m, mine);
        const res = (result.match(/\*/g) || []).length;

        //THEN
        const output = `.*.\n..*\n...\n`;
        const out = (output.match(/\*/g) || []).length;

        expect(res).toBe(out);
    });

    test(`check if points are equal to 1 when a mine is nearby`, function() {
        //GIVEN
        const n = 2;
        const m = 2;
        const mine = 1;

        //WHEN
        const result = createBoard(n, m, mine);

        //THEN
        const output = `*1\n11\n`;

        expect(result).toBe(output);
    });


});