function BMod (name) {
  this.name = name
}

BMod.prototype.getName = function () {
  return this.name
}

var mod = new BMod('Jason11')
console.log(mod)
