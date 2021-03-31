// Naive solution
class MinMaxStack {
	constructor() {
		this.stack = []; 
	}
  //O(1) time
  peek() {
    // Write your code here.
		return this.stack[this.stack.length - 1];
  }
  //O(1) time
  pop() {
    // Write your code here.
		return this.stack.pop();
  }
  //O(1) time
  push(number) {
    // Write your code here.
		this.stack.push(number); 
  }
  //O(n) time
  getMin() {
    // Write your code here.
		return Math.min(...this.stack); 
  }
  //O(n) time
  getMax() {
    // Write your code here.
		return Math.max(...this.stack); 
  }
}

//Best solution O(1) time on all methods
class MinMaxStack {
	constructor() {
		this.minMaxStack = []; 
		this.stack = [];
	}
	
  peek() {
    // Write your code here.
		return this.stack[this.stack.length - 1]; 
  }

  pop() {
    // Write your code here.
		this.minMaxStack.pop();
		return this.stack.pop();
  }

  push(number) {
    // Write your code here.
		const newMinMax = {min: number, max: number};
		if(this.minMaxStack.length) {
			const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1]; 
			newMinMax.min = Math.min(lastMinMax.min, number); 
			newMinMax.max = Math.max(lastMinMax.max, number); 
		}
		this.minMaxStack.push(newMinMax); 
		this.stack.push(number); 
  }

  getMin() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length - 1].min; 
  }

  getMax() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}



