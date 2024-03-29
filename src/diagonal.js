import {deque} from '@data-structure/deque';
import {count} from '@iterable-iterator/count';
import {iter} from '@iterable-iterator/iter';
import {_next} from '@iterable-iterator/next';

/**
 * Computes the product of two iterables in a way that allows for one or both
 * of them to be infinite (in contrast with {@link product}).
 * Although the output iterator may be infinite, it is guaranteed that each
 * value of the product is located at some finite position in the output
 * iterator.
 *
 * If one of the two inputs has finite size N, it is guaranteed that memory
 * usage never exceeds O(N) values. If both inputs have infinite size, then
 * memory usage grows proportionally to the square root of the number of
 * output pairs.
 *
 * @example
 * // returns [ [ 0 , 0 ] , [ 0 , 1 ] , [ 1 , 0 ] , [ 1 , 1 ] ]
 * list( diagonal( range( 2 ) , range( 2 ) ) ) ;
 *
 * @param {Iterable} A - The first iterable.
 * @param {Iterable} B - The second iterable.
 * @returns {IterableIterator}
 *
 */
export default function* diagonal(A, B) {
	const itA = iter(A);
	const itB = iter(B);
	const _A = deque();
	const _B = deque();

	for (const n of count()) {
		let _a = _next(itA);
		let _b = _next(itB);
		if (!_a.done) {
			if (_b.done) {
				if (_B.length === 0) return;
				do {
					_A.append(_a.value);
					_A.popleft();
					for (let i = 0; i < n; ++i) yield [_A.get(i), _B.get(n - i - 1)];
					_a = _next(itA);
				} while (!_a.done);

				break;
			} else {
				_A.append(_a.value);
				_B.append(_b.value);
				for (let i = 0; i <= n; ++i) yield [_A.get(i), _B.get(n - i)];
			}
		} else if (_b.done) {
			break;
		} else {
			if (_A.length === 0) return;
			do {
				_B.append(_b.value);
				_B.popleft();
				for (let i = 0; i < n; ++i) yield [_A.get(i), _B.get(n - i - 1)];
				_b = _next(itB);
			} while (!_b.done);

			break;
		}
	}

	// Yield lower triangle

	const n = _A.length;

	for (let i = 1; i < n; ++i) {
		for (let j = i; j < n; ++j) {
			yield [_A.get(j), _B.get(n - j + i - 1)];
		}
	}
}
