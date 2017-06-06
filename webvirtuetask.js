/**
 * Created by User on 6/6/2017.
 */
import React, {Component} from 'react';

class NumberList extends Component {

    constructor(){
        super();
        this.state = {num : '1,4,7,3,8,12,21,6'}
    }

    isValidNumber(num) {
        //console.log("is valid",num);
        var result = true;
        if(isNaN(num)){
            result = false;
        }
        if(num <= 0){
            result = false;
        }
        if(!(parseInt(num) == parseFloat(num))){
            result = false;
        }
        return result;
    }

    arrangeNumbers(n){
        var inputArray = n.split(',');
        //console.log("coming Number List", inputArray);
        var evenNumList = [];
        var oddNumList = [];
        //console.log(inputArray.length);
            for(var i= 1; i<inputArray.length; i++) {
                if (this.isValidNumber(i)) {
                    if ((inputArray[i] % 2) == 0) {
                        var even = evenNumList.push(inputArray[i]);
                        console.log("Even Number List", even);
                    }
                    else {
                        var odd = oddNumList.push(inputArray[i]);
                        console.log("Odd Number List", odd);
                    }
                }
                else {
                    return false;
                }
            }
            var retrunobj = {};
            retrunobj.even = evenNumList.join();
            retrunobj.odd = oddNumList.join();
            //console.log(retrunobj);
            return retrunobj;
    }

    render() {

        var number = this.state.num;
        if (number != ''){
            this.arrangeNumbers(number);
         }
        return (
            <div class="jumbotron">
                <h1>Hello, React!</h1>
                <p>{this.state.num}</p>
                <p>{this.arrangeNumbers.retrunobj}</p>
            </div>
        );
    }
}

// console.log("show");
export default NumberList;
