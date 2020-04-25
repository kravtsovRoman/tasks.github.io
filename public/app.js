
document.querySelectorAll('.price').forEach(node => {
  node.textContent = new Intl.NumberFormat('ru-RU', {
    currency: 'uah',
    style: 'currency'
  }).format(node.textContent)
})