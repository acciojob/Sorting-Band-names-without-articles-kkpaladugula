let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Rolling Stones', 'Aerosmith', 'The Doors', 'Nirvana'];

//remove the articles from the band name
bandNames = bandNames.map(name => name.replace(/^(a|an|the)\s+/i, '').trim());

//sorting the names in lexicographic order
bandNames.sort();

// select the ul elements
const ul = document.querySelector('ul');

// Create an array of li elements for the band names and add them to the ul element
ul.innerHTML = bandNames.map(name => `<li>${name}</li>`).join('');