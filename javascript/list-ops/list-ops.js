//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(arr) {
    this.values = arr || []
  }

  append(list) {
    this.values = [...this.values, ...list.values]
    
    return this
  }

  concat(list) {
    for(const el of list.values) {
      if(el instanceof List) {
        this.append(el)
      }
    }
    return this
  }

  filter(fn) {
    const values = [];
    for(const value of this.values) {
      if(fn(value)) {
        values[values.length] = value
      }
    }
    return new List(values)
  }

  map(fn) {
    const values = []
    for(const value of this.values) {
      values[values.length] = fn(value)
    }
    return new List(values)
  }

  length() {
    return this.values.length
  }

  foldl(fn, init) {
    let total = init
    for(const value of this.values) {
      total = fn(total,value)
    }
    return total
  }

  foldr(fn, init) {
    const len = this.values.length
    let total = init
    for(let i = 0; i < len; i++) {
      total = fn(total, this.values[len - i - 1])
    }
    return total
  }

  reverse() {
    const values = [],
      len = this.values.length
    for(let i = 0; i < len; i++) {
      values[values.length] = this.values[len - i - 1]
    }
    return new List(values)
  }
}
