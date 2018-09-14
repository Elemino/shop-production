import {
	counter,
	total
} from './counter';

test('counter', () => {

	expect(counter(1, 2)).toBe(3)
	expect(counter(5, 2)).toBe(7);
});

test('total', () => {

	expect(total(5, 20)).toBe(2);
});
