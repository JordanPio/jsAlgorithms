if (index <= (this.length/2)) {
    // loop through start
    let counter = 0
    while (counter < this.length-1) {
        if (counter === index) return this.head
        counter++
        this.head = this.head.next
    }

} else {
    // loop backwards
         // loop through start
         let counter = this.length-1
         while (counter > 0) {
             if (counter === index) return this.head
             counter--
             this.head = this.head.prev
}
}