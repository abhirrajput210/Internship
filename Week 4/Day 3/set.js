function mySet(){
    var collection = [];

// Method For Checking the Presence Of An Element And Return True Or False 

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

// This Method Returns All The Value Of The Stack

    this.values = function(){
        return collection;
    }

// Method For Adding An Elements In Set

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

// Method For Removing Elements From The Stack

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

// Method For Printing The Size Of The Collection

    this.size = function(){
        return collection.length;
    }

// Union Operation On Stack

    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    }

// This Method Returns The Intersection Of Two Sets As A New Set 

    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

// This Method Returns Difference Of Two Sets As A New Set

    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

// This Method Will Returns If The Set Is The Subset Of Different Set

this.subSet = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(value){
        return otherSet.has(value);
    });
};
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subSet(setB));
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
