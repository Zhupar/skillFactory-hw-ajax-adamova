const btn =document.querySelector('.btn')
const out =document.querySelector('.out')
let images;

btn.addEventListener('click', function(){
	const inputs= document.querySelectorAll('input')
	const url = 'https://picsum.photos/v2/list?'
	const page = inputs[0].value
	const limit = inputs[1].value
	isValid(page, limit, url)

})

function isValid (page, limit, url){
	if (page<10 && page>0) {
		if (limit<10 && limit>0) {
			return getImg(page, limit, url)
		}
		else {
			out.innerHTML='Лимит вне диапазона от 1 до 10'
		}
	} else {
		if (limit<10 && limit>0) {
			out.innerHTML='Номер страницы вне диапазона от 1 до 10'
		} else{
			out.innerHTML='Номер страницы и лимит вне диапазона от 1 до 10'

		}

	} }

function getImg(page, limit, url){
	return fetch(`${url}page=${page}&limit=${limit}`)
  		.then((response) => {
			images=`<img src="${response.url}" alt="">`
			out.innerHTML=images
			localStorage.setItem('addImg', images)})
		
		.catch(() => { console.log('error') });
}
console.log(images)
if (localStorage.getItem('addImg')!==null) {
	out.innerHTML=localStorage.getItem('addImg', images)
}