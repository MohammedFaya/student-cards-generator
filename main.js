let names=['Ali','Ahmed','Gamal','Mohammed','Sami','Hassan']
let ages=['18 years old','16 years old','14 years old','15 years old','10 years old','12 years old']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(names,ages) 
{
    //element
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //content
    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages); 
    img.src = 'picture.png';
    title.appendChild(head);
    age.appendChild(ageContent);
    
    //style
    card.style.width = '200px';
    card.style.background = "#444";
    card.style.color = "#fff";
    card.style.padding = '10px';
    card.style.margin = '3px';
    card.style.display = 'inline-block';
    img.style.width ='100%';

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);

}
for( let i = 0 ;i < 6 ; i++ )
{
   element(names[i],ages[i]);
}

