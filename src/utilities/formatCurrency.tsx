const Currency_FORMATTER = new Intl.NumberFormat(undefined,{
  currency:"USD",
  style:"currency",
})

function formatCurrency(number:number) {
  return  Currency_FORMATTER.format(number)
}

export default formatCurrency 