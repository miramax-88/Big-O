const nemo = ['a', 'nemo'];
const nemo2 = ['a', 'd', 'dd', 'dd', 'dd', 'dd', 'nemo'];
const large = new Array(100000).fill('nemo');

function findNemo(arr) {
  let t0 = performance.now();
  for(i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
     // console.log('exists');
    }
  }
  let t1 = performance.now();
  console.log('time to execute is ', (t1-t0))
}

findNemo(large)