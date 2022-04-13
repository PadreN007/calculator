import calculator from "../src/calc.js";
import assert from 'assert'; 
 
describe('Tasks', function () {
    describe('test', function () {
        it('test test', function () {
            
        });
    });
    describe('sum', function () {
        it('1 + 1 = 2', function () {
            assert.equal((new calculator(1,1)).sum(),2);
        });

        it('2 + 2 = 4', function () {
            //(new calculator(2,2)).sum()
            // let a = new calculator(2,2);
            // a.sum();
            assert.equal((new calculator(2,2)).sum(),4);
        });
        
        it('1 + 1 + 1 + 1 + 1 = 5', function () {
            let obj = (new calculator(1,1, 'multiple'));
            obj =  obj.sum().sum(1).sum(1).sum(1);
            assert.equal(obj.res(),5)
        });

        it('2 + 2 + 2 + 2 + 2 = 10', function () {
            let obj = (new calculator(2,2, 'multiple'));
            obj =  obj.sum().sum(2).sum(2).sum(2);
            assert.equal(obj.res(),10)
        });

        it('10 + 10 + 10 + 40 = 70', function () {
            let obj = (new calculator(10,10, 'multiple'));
            obj =  obj.sum().sum(10).sum(40);
            assert.equal(obj.res(),70)
        });

        it('100 + 100 + 50 + 50 = 300', function () {
            let obj = (new calculator(100,100, 'multiple'));
            obj =  obj.sum().sum(50).sum(50);
            assert.equal(obj.res(),300)
        });
    
        // it('trash', function () {
        //     assert.equal((new calculator("asd",2).sum(),"Error");
        // });

        // it('trash', function () {
        //     assert.equal(new calculator(2,"asdasdasd",'sum'),"Error");
        // });
    });
    
    describe('devide', function () {
        it('1 - 1 = 0', function () {
            assert.equal((new calculator(1,1)).minus(),0);
        });

        it('4 - 2 = 2', function () {
            assert.equal((new calculator(4,2)).minus(),2);
        });

        it('200 - 100 - 0.9 = 99.1', function() {
            let obj = (new calculator(200,100, 'multiple'));
            obj = obj.minus().minus(0.9)
            assert.equal(obj.res(), 99.1)
        });

        it('100 - 25 - 25 = 50', function () {
            let obj = (new calculator(100,25, 'multiple'));
            obj =  obj.minus().minus(25);
            assert.equal(obj.res(),50)
        });
        
        it('4 - 9 - 8 = -13', function () {
            let obj = (new calculator(4,9, 'multiple'));
            obj = obj.minus().minus(8)
            assert.equal(obj.res(),-13)
        });
    });

    describe('multiply', function () {
        it('4 * 2 = 8', function () {
            assert.equal((new calculator(4,2)).multiply(),8);
        });

        it('4 * 1 = 4', function () {
            assert.equal((new calculator(4,1)).multiply(), 4);
        });

        it('4 * 0 = 0', function () {
            assert.equal((new calculator(4,0)).multiply(),0);
        });

        it('4 * 4 * 2 * 3 = 96', function() {
            let obj = (new calculator(4,4, 'multiple'));
            obj = obj.multiply().multiply(2).multiply(3);
            assert.equal(obj.res(), 96)
        });

        it('4 * 10 * 0.5 = 20', function() {
            let obj = (new calculator(4,10, 'multiple'));
            obj = obj.multiply().multiply(0.5);
            assert.equal(obj.res(), 20)
        });

        it('10 * 10 * 2 = 200', function() {
            let obj = (new calculator(10,10, 'multiple'));
            obj = obj.multiply().multiply(2)
            assert.equal(obj.res(),200)
        });
    });

    describe('del', function () {
        it('4 : 4 = 1', function () {
            assert.equal((new calculator(4,4)).del(),1);
        });

        it('4 : 2 = 2', function () {
            assert.equal((new calculator(4,2)).del(),2);
        });

        it('4 : 1 = 4', function () {
            assert.equal((new calculator(4,1)).del(), 4);
        });
        
        it('10 : 2 : 2.5 : 2 = 1', function() {
            let obj = (new calculator(10,2, 'multiple'));
            obj = obj.del().del(2.5).del(2)
            assert.equal(obj.res(), 1)
        });

        it('40 : 2 : 10 = 2', function() {
            let obj = (new calculator(40,2, 'multiple'));
            obj = obj.del().del(10)
            assert.equal(obj.res(), 2)
        });

        it('15 : 15 : 1 = 1', function() {
            let obj = (new calculator(15,15, 'multiple'));
            obj = obj.del().del(1)
            assert.equal(obj.res(), 1)
        });

        it('4 : 0 = error', function () {
            assert.equal((new calculator(4,0)).del(),'Error');
        });
    });
});