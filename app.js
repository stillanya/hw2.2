var getOrder=prompt('Пожалуйста,сделайте заказ!').toLowerCase()
var objectStarbucks={
    coffees:{
        espresso:'эсперссо',
        americano:'американо',
        cappuccino:'капучино',
        latte:'латте'
    },
    teas:{
        black:'черный чай',
        green:'зеленый чай',
        white:'чай с молоком'
    }
}
if (getOrder === objectStarbucks.coffees.espresso){
    alert('Ваш заказ на ' + objectStarbucks.coffees.espresso + ' принят!')
}else if (getOrder === objectStarbucks.coffees.americano){
    alert('Ваш заказ на ' + objectStarbucks.coffees.americano + ' принят!')
}else if (getOrder === objectStarbucks.coffees.cappuccino){
    alert('Ваш заказ на ' + objectStarbucks.coffees.cappuccino + ' принят!')
}else if (getOrder === objectStarbucks.coffees.latte){
    alert('Ваш заказ на ' + objectStarbucks.coffees.latte + ' принят!')
}else if (getOrder === objectStarbucks.teas.black){
    alert('Ваш заказ на ' + objectStarbucks.teas.black + ' принят!')
}else if (getOrder === objectStarbucks.teas.green){
    alert('Ваш заказ на ' + objectStarbucks.teas.green + ' принят!')
}else if (getOrder === objectStarbucks.teas.white){
    alert('Ваш заказ на ' + objectStarbucks.teas.white + ' принят!')
}else{
    alert('К сожалению,у нас нет такой позиции.Вы можете попробовать что-то другое.')
}