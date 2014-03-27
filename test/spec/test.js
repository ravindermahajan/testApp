/* global describe, it */

(function () {
  'use strict';


  //Mainly your class Name
  describe("Person", function() {

    beforeEach(function() {
      //called before each test is executed
      this.humanStub=sinon.stub(MyModule,'Human');
      this.consoleStub=sinon.stub();
      window.console.log=this.consoleStub;
    });

    afterEach(function() {
      //called before each test is executed
      this.humanStub.restore();
    });


    describe("constructor", function() {
      it("should have a default name", function() {
        var person = new MyModule.Person();
        expect(person.name).to.equal("Ravinder Mahajan");
        expect(this.consoleStub.calledOnce).to.equal(true);
      });

      it("should set Person's name if provided", function() {
        var person = new MyModule.Person("Kate");
        assert.equal(person.name,"Kate");
      });
    });

    describe("outsideClass", function() {
      it("Should call outside class call", function() {
        new MyModule.Person().outsideClass();
        expect(this.humanStub.calledOnce).to.equal(true);
      });
    });

    describe("greets", function() {
      it("should throw if no target is passed in", function() {
        expect(function() {
          (new MyModule.Person()).greets();
        }).to.throw(Error);
      });
    });
  });
})();
