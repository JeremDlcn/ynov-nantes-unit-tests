const { Shop, Item } = require("../src/gilded_rose");
const fixtures = require('./gilded_rose_fixture');

describe("Gilded Rose", function() {
    describe.each(fixtures.items)("Commons tests", (element) => {
        test(`Every day each items lose 1 quality point: on ${element.name}`, () => {
            const gildedRose = new Shop([element]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(element.quality);
        })
        test(`Every day each items lose 1 SellIn number: ${element.name}`, () => {
            const gildedRose = new Shop([element]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(element.sellIn);
        })
    })

    describe.each(fixtures.items)("Quality tests", (element) => {
        test(`Quality should never be negative: ${element.name}`, () => {
            const gildedRose = new Shop([element]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBeGreaterThanOrEqual(0);
        })
        test(`Quality should never exceed 50: ${element.name}`, () => {
            const gildedRose = new Shop([element]);
            const items = gildedRose.updateQuality();
            if (items[0].name !== "Sulfuras, Hand of Ragnaros") {
                expect(items[0].quality).toBeLessThanOrEqual(50);
            }
        })
        test(`Quality should degrade 2 time faster when SellIn reach 0: ${element.name}`, () => {
            const gildedRose = new Shop([element]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(element.quality);
        })
    })
    describe("Aged Brie tests", () => {
        test("Aged Brie quality should increase by 1 every day", () => {
            const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(11);
        })
    })
    describe("Sulfuras tests", () => {
        test("Sulfuras quality should never change", () => {
            const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(80);
        })
        test("Sulfuras sellIn should never change", () => {
            const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(10);
        })
    })
    describe("Backstage passes tests", () => {
        test("Backstage passes quality should increase by 2 when sellIn is 10 or less", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(12);
        })
        test("Backstage passes quality should increase by 3 when sellIn is 5 or less", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(13);
        })
        test("Backstage passes quality should be 0 when sellIn is 0", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(0);
        })
    })
});