MyModule=window.MyModule||{};

(function(Namespace) {
  "use strict";

  Namespace.Person=Person;;
  var proto=Person.prototype;
  function Person(name) {
    this.name = name || "Ravinder Mahajan";
    console.log('testing my method');
  }

  proto.greets=function(target) {
    if (!target)
      throw new Error("missing target");
    return this.name + " greets " + target;
  }

  proto.outsideClass=function(){
    new MyModule.Human(function(){alert('hi')},20);
  }

})(MyModule);