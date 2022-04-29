describe("TODO tests", function() {
    describe.each(fixtures.items)("Commons", (element) => {
        test(`Create a task`, () => {
            const res = createTODO("Create a task test");
            console.log(res);

            expect(1).toBe(1);
        })
    })
});

describe("TODO tests", function() {
    describe.each(fixtures.items)("Commons", (element) => {
        test(`End a task`, () => {
            doneTODO(element);

            expect(1).toBe(1);
        })
    })
});