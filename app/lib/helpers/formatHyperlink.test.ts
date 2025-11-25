import { formatHyperlink } from './formatHyperlink';

describe('FormatText', () => {
	test('empty to be empty', () => {
		expect(formatHyperlink('')).toBe('');
	});
	test('A123 to be A123', () => {
		expect(formatHyperlink('A123')).toBe('A123');
	});
	test('Format <http://link|Text> to be <http://link|Text>', () => {
		expect(formatHyperlink('<http://link|Text>')).toBe('<http://link|Text>');
	});
	test('Format "[ ](https://chat.vinatex.com.vn/) Test" to be Test', () => {
		expect(formatHyperlink('[ ](https://chat.vinatex.com.vn/) Test')).toBe('Test');
	});
	test('Format "[Open](https://chat.vinatex.com.vn/) Test" to be Test', () => {
		expect(formatHyperlink('[Open](https://chat.vinatex.com.vn/) Test')).toBe('[Open](https://chat.vinatex.com.vn/) Test');
	});
	test('render test (arabic)', () => {
		expect(formatHyperlink('[ ](https://chat.vinatex.com.vn/) اختبا')).toBe('اختبا');
	});

	test('render test (russian)', () => {
		expect(formatHyperlink('[ ](https://chat.vinatex.com.vn/) тест123')).toBe('тест123');
	});
});
