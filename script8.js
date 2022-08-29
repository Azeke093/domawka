let money = prompt('Сумма денег в кошельке')
let shokolad = prompt('цена шоколадки')
alert((+money / +shokolad).toFixed());
alert('Остаток денег'+(+money % shokolad));