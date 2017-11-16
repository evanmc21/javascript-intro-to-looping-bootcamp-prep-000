function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push( `I am 1 stange loop`)
    }
      else {
        array.push(`I am ${i} strange loops`)
      }
    }
  return array
}
function whileLoop(n) {
  let countdown = n;
    while (countdown)
      console.log (--countdown)
  return 'done';
}
