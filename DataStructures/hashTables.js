// needs to be reliable, deterministic, fast


class HashTable {
    constructor(size=53){ // define the size of the array to be a 53= prime number
      this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
      }

      set(key,value) {
          let index = this._hash(key) // get the index
          //check if that position has already been used in the array and if yes we just add the value otherwise we initialize a new array and than we push it

          if (!this.keyMap[index]) { // if index has not been initialized
              this.keyMap[index] = []
          }
          this.keyMap[index].push([key, value])
      }

      get(key) {
        let index = this._hash(key) // hash the key again to get the index position
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
                
            }
        }
        return undefined

      }
      keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keysArr.includes(this.keyMap[i][j][0])){ // check if the value is already there and avoid duplicates
                keysArr.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keysArr;
      }
      values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j][1])
              }
            }
          }
        }
        return valuesArr;
      }

}


let ht = new HashTable(4);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

debugger



