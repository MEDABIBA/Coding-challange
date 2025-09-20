// 1) async/await + Promise.then
// async function A() {
//   console.log('A1');
//   await 0;
//   console.log('A2');
// }
// console.log('S');
// A();
// Promise.resolve().then(() => console.log('T'));
// console.log('E');
// expected order: ?

// 2) Chain with return, throw, finally
// Promise.resolve('p0')
//   .then(v => { console.log('t1', v); return 'p1'; })
//   .then(v => { console.log('t2', v); throw 'err'; })
//   .catch(e => { console.log('c1', e); return 'p2'; })
//   .finally(() => { console.log('f1'); })
//   .then(v => { console.log('t3', v); });
// expected order: ?

// 3) Microtasks, added inside microtasks
// console.log('S');
// Promise.resolve().then(() => {
//   console.log('m1');
//   Promise.resolve().then(() => console.log('m1-1'));
//   queueMicrotask(() => console.log('m1-2'));
// });
// queueMicrotask(() => {
//   console.log('qm');
//   Promise.resolve().then(() => console.log('qm-then'));
// });
// console.log('E');
// expected order: ?

// 4) setTimeout inside microtask
// console.log('S');
// Promise.resolve().then(() => {
//   console.log('m');
//   setTimeout(() => console.log('t in m'), 0);
// });
// setTimeout(() => console.log('t'), 0);
// console.log('E');
// expected order: ?

// 5) Two timers, microtask between them
// console.log('S');
// setTimeout(() => console.log('t0-A'), 0);
// Promise.resolve().then(() => console.log('micro'));
// setTimeout(() => console.log('t0-B'), 0);
// console.log('E');
// expected order: ?

// 6) Deep then-chain with promises
// console.log('S');
// Promise.resolve(1)
//   .then(x => { console.log('a', x); return Promise.resolve(x + 1); })
//   .then(x => { console.log('b', x); return x + 1; })
//   .then(x => { console.log('c', x); });
// console.log('E');
// expected order: ?

// 7) async/await + then inside
// async function f() {
//   console.log('f1');
//   await Promise.resolve().then(() => console.log('then-in-await'));
//   console.log('f2');
// }
// console.log('S');
// f();
// console.log('E');
// // expected order: ?

// 8) Promise.all with mixed calls
// const p1 = Promise.resolve().then(() => { console.log('p1 then'); return 'p1'; });
// const p2 = new Promise(res => { console.log('p2 exec'); res('p2'); });
// const p3 = Promise.resolve('p3');

// Promise.all([p1, p2, p3]).then(vals => console.log('all', vals));
// // expected order: ?

// 9) Promise.race: promise vs timer
// console.log('S');
// const p = Promise.resolve().then(() => { console.log('micro'); return 'P'; });
// const t = new Promise(res => setTimeout(() => { console.log('timeout'); res('T'); }, 0));
// Promise.race([p, t]).then(v => console.log('race', v));
// console.log('E');
// // expected order: ?

// 10) Promise.any with rejections
// const a1 = Promise.reject('e1');
// const a2 = Promise.resolve('ok');
// const a3 = Promise.reject('e3');
// Promise.any([a1, a2, a3])
//   .then(v => console.log('any', v))
//   .catch(e => console.log('any err', e));
// a1.catch(e => console.log('a1 catch', e));
// a3.catch(e => console.log('a3 catch', e));
// // expected order: ?

// 11) Generator + microtasks
// function* gen() {
//   console.log('g-1');
//   yield;
//   console.log('g-2');
//   yield;
//   console.log('g-3');
// }
// console.log('S');
// const it = gen();
// it.next();
// Promise.resolve().then(() => console.log('m1'));
// it.next();
// Promise.resolve().then(() => console.log('m2'));
// console.log('E');
// // expected order: ?

// 12) Generator + yield Promise (without runner)
// function* g() {
//   console.log('G1');
//   const res = yield Promise.resolve('X');
//   console.log('G2', res);
// }
// const it2 = g();
// const yielded = it2.next(); // value = promise
// yielded.value.then(v => {
//   console.log('then', v);
//   it2.next(v);
// });
// // expected order: ?

// 13) finally adds microtasks
// Promise.resolve('A')
//   .finally(() => {
//     console.log('fin');
//     Promise.resolve().then(() => console.log('fin-micro'));
//   })
//   .then(v => console.log('then', v));
// // expected order: ?

// 14) catch converts error to success
// Promise.reject('X')
//   .catch(e => { console.log('catch', e); return 'Y'; })
//   .then(v => console.log('then', v))
//   .finally(() => console.log('finally'));
// // expected order: ?

// 15) queueMicrotask vs Promise.then vs synchronous throw/catch
// console.log('S');
// try {
//   queueMicrotask(() => console.log('qm'));
//   Promise.resolve().then(() => console.log('then'));
//   throw 'ERR';
// } catch (e) {
//   console.log('caught', e);
// }
// console.log('E');
// // expected order: ?

// 16) requestAnimationFrame + micro/macro

// (browser with rAF needed)

// console.log('S');
// requestAnimationFrame(() => console.log('raf'));
// Promise.resolve().then(() => console.log('micro'));
// setTimeout(() => console.log('timeout'), 0);
// console.log('E');
// // expected order: ?

// 17) MutationObserver as microtask

// (DOM needed)

// const target = document.createTextNode('x');
// const mo = new MutationObserver(() => console.log('mo'));
// mo.observe(target, { characterData: true, subtree: true });

// console.log('S');
// queueMicrotask(() => console.log('qm'));
// target.data = 'y'; // triggers MO (microtask)
// Promise.resolve().then(() => console.log('then'));
// console.log('E');
// // expected order: ?

// 18) Two async + mutual await
// async function A() {
//   console.log('A1');
//   await B();
//   console.log('A2');
// }
// async function B() {
//   console.log('B1');
//   await 0;
//   console.log('B2');
// }
// console.log('S');
// A();
// console.log('E');
// // expected order: ?

// 19) Nested then + rejection in the middle
// Promise.resolve()
//   .then(() => {
//     console.log('t1');
//     return Promise.resolve().then(() => {
//       console.log('t1-1');
//       throw 'boom';
//     });
//   })
//   .then(() => console.log('t2'))
//   .catch(e => {
//     console.log('catch', e);
//     return Promise.resolve().then(() => console.log('after-catch'));
//   })
//   .then(() => console.log('t3'));
// // expected order: ?

// 20) Microtasks during microtask flush
// console.log('S');
// Promise.resolve().then(() => {
//   console.log('m1');
//   Promise.resolve().then(() => {
//     console.log('m1-1');
//     Promise.resolve().then(() => console.log('m1-1-1'));
//   });
// });
// Promise.resolve().then(() => console.log('m2'));
// console.log('E');
// // expected order: ?

// 21) Timer inside finally
// Promise.resolve()
//   .then(() => { console.log('t'); })
//   .finally(() => {
//     console.log('f');
//     setTimeout(() => console.log('t-in-f'), 0);
//   })
//   .then(() => console.log('t2'));
// // expected order: ?

// 22) await in loop vs parallel promises
// async function seq() {
//   console.log('seq-1');
//   await Promise.resolve().then(() => console.log('seq-m'));
//   console.log('seq-2');
// }
// async function par() {
//   console.log('par-1');
//   Promise.resolve().then(() => console.log('par-m1'));
//   Promise.resolve().then(() => console.log('par-m2'));
//   console.log('par-2');
// }
// console.log('S');
// seq();
// par();
// console.log('E');
// // expected order: ?

// 23) Interaction of then and await on the same promise
// const p = Promise.resolve().then(() => console.log('p-then'));
// async function f() {
//   console.log('f1');
//   await p;
//   console.log('f2');
// }
// console.log('S');
// f();
// console.log('E');
// // expected order: ?

// 24) Chain with return Promise.resolve(...) at each step
// Promise.resolve('x')
//   .then(v => { console.log('t1', v); return Promise.resolve('y'); })
//   .then(v => { console.log('t2', v); return Promise.resolve('z'); })
//   .then(v => { console.log('t3', v); });
// // expected order: ?

// 25) catch inside, another catch outside
// Promise.reject('e')
//   .catch(e => { console.log('c1', e); throw 'e2'; })
//   .catch(e => { console.log('c2', e); return 'ok'; })
//   .then(v => console.log('t', v));
// // expected order: ?

// 26) Does finally change the value?
// Promise.resolve('A')
//   .finally(() => { console.log('fin'); return 'B'; })
//   .then(v => console.log('then', v));
// // expected order: ?

// 27) Alternating setTimeout and microtasks in callbacks
// setTimeout(() => {
//   console.log('t1');
//   Promise.resolve().then(() => console.log('m-in-t1'));
//   setTimeout(() => console.log('t2'), 0);
// }, 0);
// Promise.resolve().then(() => console.log('m'));
// // expected order: ?

// 28) Generator + microtasks between next()
// function* g() {
//   console.log('g1');
//   yield;
//   console.log('g2');
// }
// console.log('S');
// const it3 = g();
// it3.next();
// Promise.resolve().then(() => console.log('m1'));
// it3.next();
// Promise.resolve().then(() => console.log('m2'));
// console.log('E');
// // expected order: ?

// 29) await in try/catch/finally
// async function f() {
//   console.log('f1');
//   try {
//     await Promise.reject('err');
//   } catch (e) {
//     console.log('catch', e);
//   } finally {
//     console.log('fin');
//   }
//   console.log('f2');
// }
// console.log('S');
// f();
// console.log('E');
// // expected order: ?

// 30) Deep mixed queue
// console.log('S');
// setTimeout(() => console.log('t1'), 0);
// Promise.resolve().then(() => {
//   console.log('m1');
//   setTimeout(() => console.log('t2'), 0);
//   Promise.resolve().then(() => console.log('m1-1'));
// });
// queueMicrotask(() => {
//   console.log('qm1');
//   queueMicrotask(() => console.log('qm1-1'));
// });
// console.log('E');
// // expected order: ?
