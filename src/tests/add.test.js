// Tests!

const add = (x, y) => x + y;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(5, 2);
    expect(result).toBe(7);
});

test('add a negative number', () => {
    const result = add(5, -1);
    expect(result).toBe(4);
});

test('add larger numbers', () => {
    const result = add(5200, 4800);
    expect(result).toBe(10000);
});

test('greet Mike', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
});

test('greet Mike', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});