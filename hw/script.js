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
			return response.json()})
		.then((data)=>{
			displayResult(data)})
			
		
		.catch(() => { console.log('error') });
}
function displayResult(apiData) {
	let cards = '';
	
	apiData.forEach(item => {
	  const cardBlock = `
	  <div class="card result">
			<img src="${item.download_url}" class="card-img-top" alt="...">
			<div class="card-body">
			  <p class="card-text">${item.author}</p>
			</div>
	  </div>
	  `;
	  cards = cards + cardBlock;
	});
	
	// console.log('end cards', cards);
	  
	out.innerHTML = cards;
	localStorage.setItem('addImg', cards)
  }
if (localStorage.getItem('addImg')!==null) {
	out.innerHTML=localStorage.getItem('addImg', images)
}