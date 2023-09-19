import { LightningElement, track } from 'lwc';

export default class CalculatorComponent extends LightningElement {
    @track number1 = 0;
    @track number2 = 0;
    @track result = 0;

    handleNumberChange(event) {
        const { label, value } = event.target;
        if (label === 'Enter Number 1') {
            this.number1 = parseFloat(value);
        } else if (label === 'Enter Number 2') {
            this.number2 = parseFloat(value);
        }
    }

    handleAdd() {
        this.result = this.number1 + this.number2;
    }

    handleSubtract() {
        this.result = this.number1 - this.number2;
    }

    handleMultiply() {
        this.result = this.number1 * this.number2;
    }

    handleDivide() {
        if (this.number2 === 0) {
            alert("Cannot divide by zero.");
            this.result = 0;
        } else {
            this.result = this.number1 / this.number2;
        }
    }
}