function Queue(){
    collection = [];

// Method For Printing The Queue

    this.print = function(){
        console.log(collection);
    }

// Method For Add The Element At The End Of The Queue

    this.enqueue = function(element){
        collection.push(element);
    }

// Method Take The First Item of The Element And Remove It From The Queue

    this.dequeue = function(){
        return collection.shift();
    }

// Method For Returning The First Elements Of The Queue

    this.front = function(){
        return collection[0];
    }

// Method For Returning The Size Of The Queue

    this.size = function(){
        return collection.length;
    }

// Method For Check Weather Queue Is Empty Or Not

    this.isEmpty = function(){
        return(collection.length === 0)
    }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();