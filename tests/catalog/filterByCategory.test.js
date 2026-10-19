const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

const getIds = (items) => items.map(({ id }) => id);

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = "all";
    expect(getIds(filterByCategory(products, filter))).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = undefined;
    expect(getIds(filterByCategory(products, filter))).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = "";
    expect(getIds(filterByCategory(products, filter))).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filter = "electronics";
    expect(getIds(filterByCategory(products, filter))).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const filter = "books";
    expect(getIds(filterByCategory(products, filter))).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const filter = "home";
    expect(getIds(filterByCategory(products, filter))).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
    const filter = "clothes";
    expect(getIds(filterByCategory(products, filter))).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    const filter = "toys";
    expect(getIds(filterByCategory(products, filter))).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    const filter = "sports";
    expect(getIds(filterByCategory(products, filter))).toEqual([]);
  });
});
