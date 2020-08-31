// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


// New timers, tasks, operations are recorded from myFile running
myFile.runContents();


function shouldContinue() {
  // check one: Any pending setTimeout, setInterval, setImmediate?
  // check two: Any pending OS tasks? (like server listening to port)
  // check three: Any pending long running operations? (like fs module)
  return pendingOSTasks.length || pendingOperations.length || pendingTimers.length;
}

// Entire body executed in one 'tick'
while (shouldContinue()) {
  // 1. Node looks at pendingTimers and sees if any functions are ready to be called.
  // setTimeout, setInterval

  // 2. Node looks at pendingOSTaska and pendingOperations and calls relevant callbacks

  // 3. Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4. Node looks at pendingTimers. 
  // Call any set Immediate

  // 5. Handle any 'close' events
}

// exit back to terminal