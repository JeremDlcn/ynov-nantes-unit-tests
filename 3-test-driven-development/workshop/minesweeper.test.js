const { createBoard, createGame } = require('./minesweeper');

describe("MineSweeper", function() {
    test(`Give a "n" x "m" board`, function() {
        //GIVEN
        const n = 3;
        const m = 3;

        //WHEN
        const result = createBoard(n, m);

        //THEN
        const output = `000\n000\n000\n`;

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
        const output = `1*1\n11*\n001\n`;
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

    test(`check number of field`, function() {
        //GIVEN
        const listBoard = [createBoard(2, 2, 1), createBoard(3, 3, 3), createBoard(4, 4, 4)];

        //WHEN
        const result = createGame(listBoard);

        //THEN
        const output =   [
            'Field #1:\n*1\n11\n',
            'Field #2:\n***\n111\n111\n',
            'Field #3:\n****\n1111\n1111\n1111\n'
        ];
        expect(result.toString()).toBe(output.toString());
    });


});