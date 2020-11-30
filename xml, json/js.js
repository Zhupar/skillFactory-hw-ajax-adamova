const parser = new DOMParser()
// XML, который мы будем парсить
const XMLString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

// Парсинг XML
const xmlDOM = parser.parseFromString(XMLString, "text/xml");

const listNode = xmlDOM.querySelector("list")
const studentNode = listNode.querySelectorAll("student")
const nameNode = studentNode[0].querySelector("name")
const firstNameNode = nameNode.querySelector("first")
const secondNameNode = nameNode.querySelector("second")
const ageNode = studentNode[0].querySelector("age")
const profNode = studentNode[0].querySelector("prof")

// Получение данных из атрибутов
const langAttr = nameNode.getAttribute("lang")

const nameNode2 = studentNode[1].querySelector("name")
const firstNameNode2 = nameNode2.querySelector("first")
const secondNameNode2 = nameNode2.querySelector("second")
const ageNode2 = studentNode[1].querySelector("age")
const profNode2 = studentNode[1].querySelector("prof")

// Получение данных из атрибутов
const langAttr2 = nameNode2.getAttribute("lang")


/* Этап 3. Запись данных в результирующий объект */
const result = {
	langAttr: langAttr,
	name: nameNode.textContent,
	firstName: firstNameNode.textContent,
	secondName: secondNameNode.textContent,
	age: ageNode.textContent,
	prof: profNode.textContent

}
const result2 = {
	langAttr: langAttr2,
	name: nameNode2.textContent,
	firstName: firstNameNode2.textContent,
	secondName: secondNameNode2.textContent,
	age: ageNode2.textContent,
	prof: profNode2.textContent

}

console.log(result)
console.log(result2)


const jsonList=`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

/* Этап 2. Получение данных */
let result3
const data = JSON.parse(jsonList)
console.log (data)
const list = data.list;
console.log(list)


result3 = {
	name: list[0].name,
	age: list[0].age,
	prof: list[0].prof
}
result4 = {
	name: list[1].name,
	age: list[1].age,
	prof: list[1].prof
}




console.log(result3)
console.log(result4)
