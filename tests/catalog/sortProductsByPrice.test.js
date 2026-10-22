const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

const getIds = (items) => items.map(({ id }) => id);
const fromIds = (ids) => ids.map((id) => products.find((p) => p.id === id));

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(getIds(sortProductsByPrice(products, "asc"))).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(getIds(sortProductsByPrice(products, ""))).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    expect(getIds(sortProductsByPrice(fromIds([1, 3, 4]), "asc"))).toEqual([
      3, 4, 1,
    ]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(getIds(sortProductsByPrice(products, "desc"))).toEqual([
      1, 2, 4, 5, 6, 3,
    ]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    expect(getIds(sortProductsByPrice(fromIds([3, 1, 4]), "desc"))).toEqual([
      1, 4, 3,
    ]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    expect(getIds(sortProductsByPrice(fromIds([5, 2, 6]), "desc"))).toEqual([
      2, 5, 6,
    ]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const source = fromIds([1, 3, 4]);
    sortProductsByPrice(source, "asc");
    expect(getIds(source)).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const source = fromIds([1, 3, 4]);
    sortProductsByPrice(source, "desc");
    expect(getIds(source)).toEqual([1, 3, 4]);
  });
  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const source = [...products];
    sortProductsByPrice(source);
    expect(source).toEqual(products);
  });
});
