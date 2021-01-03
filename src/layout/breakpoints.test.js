import { breakAt, sizes } from './breakpoints';

test.each([[sizes.sm], [sizes.md], [sizes.lg], [sizes.xl]])(
	'break at %ipx',
	(size) => {
		expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
	}
);
