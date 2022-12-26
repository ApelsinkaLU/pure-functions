import getHealthPoints from '../src/health';

test('should be healthy', () => {
    const result = getHealthPoints({name: 'any', health: 96});
    expect(result).toBe('healthy');
});

test('should be wounded', () => {
    const result = getHealthPoints({name: 'any', health: 43});
    expect(result).toBe('wounded');
});

test('should be critical', () => {
    const result = getHealthPoints({name: 'any', health: 14});
    expect(result).toBe('critical');
});