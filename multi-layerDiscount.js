/*
if ticket number is less than 100, per ticket price 100
if ticket number is 101-200, per ticket price 90
if 200++, per ticket price 70


*/

function ticketPrice(ticketNumber) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketNumber <= 100){
        const price = first100Rate * ticketNumber;
        return price;
    }
    else if(ticketNumber <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketNumber - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketNumber - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(201);
console.log(price);