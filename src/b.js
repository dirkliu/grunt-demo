function BMod (name) {
  this.name = name
}

BMod.prototype.getName = function () {
  return this.name
}

var mod = new BMod('Jason1')
console.log(mod)
