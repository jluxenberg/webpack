import bar_string from './bar';

console.log("outer log", bar_string);

var my_class = class {
    constructor() {
       this.bar = bar_string;
       console.log("inner log", bar_string)
    }
  },  my_instance = (new my_class())


it("should mangle imports in class constructors", function() {
	expect(my_instance.bar).toBe(bar_string);

});
