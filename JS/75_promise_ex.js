function one() {
  const promise_11 = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(10);
    }, 0);
  });
  return promise_11;
}

function two() {
  const promise_22 = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(20);
    }, 0);
  });
  return promise_22
}

function three() {
  const promise_33 = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(30);
    }, 0);
  });

  return promise_33;
}

async function test() {
  try {
    const res1 = await one();
    const res2 = await two();
    const res3 = await three();
    const output = (res1 + res2 + res3)
    console.log('response ', output);
  } catch (e) {

  }
}

test();

// How to run Async Await in Parallel and serial with JavaScript(Node)
async function sleep(time = 1) {
	const sleepMilliseconds = time * 1000
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
      if(time === 0.5){
        reject(`rejected`)
      }else{
        resolve(`Slept for: ${sleepMilliseconds}ms`)
      }
			
		}, sleepMilliseconds)
	})
}

// I have created a very simple function that will call the sleep function three times:


async function main() {
	// 1. 
	console.time('main')

	// 2.
	const [firstCall, secondCall, thirdCall] = await Promise.all([
		sleep(1), 
		sleep(2),
		sleep(3)
	])
	console.log(`First call: ${firstCall}`)
	console.log(`Second call: ${secondCall}`)
	console.log(`Third call: ${thirdCall}`)

	// 3.
	console.timeEnd('main')
}

main()

// We start a timer, this will allow us to time the code to see how long the code will run for.

// The solution. In order to run multiple async/await calls in parallel, all we need to do is add the calls to an array, and then pass that array as an argument to Promise.all(). Promise.all() will wait for all the provided async calls to be resolved before it carries on(see Conclusion for caveat).

// Call console.timeEnd() to stop the timer, this will also print out how long the code between console.time() and console.timeEnd() has taken to run.

// First call: Slept for: 1000ms
// Second call: Slept for: 2000ms
// Third call: Slept for: 3000ms
// main: 3011.047ms

// As we can see from the output, all three sleep functions run and they print out how long they have run for. We can also see how long the main function has run for, just over 3000ms. This shows that we are running these tasks in parallel, if we weren't, the main function would have run for about 6000ms because it would need to wait for each sleep function to complete before it could run the next sleep function.

// To test this out, update the main function with the following code:

async function main_1() {
	// 1. 
	console.time('main_1')

	// 2.
	console.log(await sleep(1))
	console.log(await sleep(2))
	console.log(await sleep(3))

	// 3.
	console.timeEnd('main_1')
}

main_1()

// Slept for: 1000ms
// Slept for: 2000ms
// Slept for: 3000ms
// main: 6019.011ms


async function main_2() {
	// 1. 
	console.time('main_2')

  // 2.
	const [firstCall, secondCall, thirdCall] = await Promise.allSettled([
		sleep(1), 
		sleep(2),
		sleep(0.5)
	])
	console.log(`First call main_2: ${firstCall}`)
	console.log(`Second call main_2: ${secondCall}`)
	console.log(`Third call main_2: ${thirdCall}`)

	// 3.
	console.timeEnd('main_2')
}

main_2()


// Running async/await code in parallel is very easy with JavaScript, all we need to use is Promise.all(). There is one thing to note though, Promise.all() will fail as soon as any of the async functions we have passed to gets rejected. If you don't want this fast failing behaviour, you can use Promise.allSettled() instead of Promise.all().