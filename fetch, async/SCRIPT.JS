const inputValue = document.querySelectorAll('input')
const btn = document.querySelector(".btn")
const output = document.querySelector(".output")

btn.addEventListener('click', function(){
	output.innerHTML=""
	 isSizeValid()
})

function isSizeValid (){
	
	if ((inputValue[0].value>100 && inputValue[0].value<300) && (inputValue[1].value>100 && inputValue[1].value)){
		useRequest()
	} else {
		output.innerHTML="одно из чисел вне диапазона от 100 до 300"

	}
}
const useRequest = () => {
	const url = `https://picsum.photos/${inputValue[0].value}/${inputValue[1].value}`
  	return fetch(url)
     .then((response) => {
     	console.log(response)
     	output.innerHTML= `<img src="${response.url}" alt="">`
      
    })
    
    .catch(() => { console.log('error') });
}