const reverse = require('../utils/for_testing').reverse

test('reverse of a', () => {
    const result = reverse('a')

    expect(result).toBe('a')
})

test('reverse of react', () => {
    const result = reverse('react')

    except(result).toBe('tcaer')
})

test('reverse of saippuakauppias', () => {
    const result = reverse('saippuakauppias')

    except(result).toBe('saippuakauppias')
})