const name = 'john';
const age = 30;
const job = 'web developer';
const city = 'brasov';

let html;

function hello(){
  return 'Hello!';
}

//Without template strings (es5)
html = '<ul><li>Name: '+ name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li><ul>';

html = '<ul>' + 
        '<li>Name: '+ name + ' </li>' +
        '<li>Age: '+ age + ' </li>' +
        '<li>Job: '+ job + ' </li>' +
        '<li>City: '+ city + ' </li>' +
        '</ul>';


//Without template strings (es6) 
html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age >= 29 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;