
var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

export function makeUL(obj) {
==
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {

        var item = document.createElement('li');
		for (var j = 0; j < item.length; j++){
			var header = document.createElement('h2');
			header.appendChild(document.createTextNode(obj[i]))
		}

        // Set its contents:
        item.appendChild(document.createTextNode(obj[i]));


        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[0]));
