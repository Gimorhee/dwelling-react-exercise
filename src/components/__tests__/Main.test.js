import { render } from "@testing-library/react";
import Main from "../Main";
import BalanceForm from "../BalanceForm";
import { calculateBalance } from "../../utils/functions.js";

test("test", () => {
  expect(true).toBe(true);
});

test("Should render Main component", () => {
  render(<Main />);
});

test("Should render BalanceForm component", () => {
  render(<BalanceForm />);
});

test("Should return 0", () => {
  const numberString = "1111 1111 1111 1111";
  expect(calculateBalance(numberString)).toBe(0);
});

test("Should also return 0", () => {
  const numberString = "3309 1102 4410 1006";
  expect(calculateBalance(numberString)).toBe(0);
});

test("Should return 12", () => {
  const numberString = "1111 1111 1111 1112";
  expect(calculateBalance(numberString)).toBe(12);
});

test("Should also return 12", () => {
  const numberString = "1111 1111 1111 1115";
  expect(calculateBalance(numberString)).toBe(12);
});

test("Should return 44", () => {
  const numberString = "1409 3484 2342 0002";
  expect(calculateBalance(numberString)).toBe(44);
});

test("Should also return 44", () => {
  const numberString = "1409 3484 2342 0005";
  expect(calculateBalance(numberString)).toBe(44);
});
