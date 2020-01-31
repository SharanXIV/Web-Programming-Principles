// set a global httpRequest object
var httpRequest;


function makeRequest(pageNum) {

	var url = 'https://reqres.in/api/users?page=' + pageNum;


	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = showContents;
	httpRequest.open('GET', url, true);
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded

			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);

			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var myTable = document.querySelector('#data');

			// Clear out contents of table.
			myTable.innerHTML = "";

			console.log(jsData);


			for (var i = 0; i < jsData.data.length; i++) {

				// Create the table row for each person.
				var personRow = document.createElement('tr');

				// Create the column for each attribute for person.
				var userIdCol = document.createElement('td');
				var fNameCol = document.createElement('td');
				var lNameCol = document.createElement('td');
				var avatarCol = document.createElement('td');

				// // Fill in the DOM elements with data from jsData.
				var userIdText = document.createTextNode(jsData.data[i].id);
				var fNameText = document.createTextNode(jsData.data[i].first_name);
				var lNameText = document.createTextNode(jsData.data[i].last_name);
				var avatarImage = document.createElement('img');
				avatarImage.setAttribute('src', jsData.data[i].avatar);

				// // Fill in the cells with data from elements.
				userIdCol.appendChild(userIdText);
				fNameCol.appendChild(fNameText);
				lNameCol.appendChild(lNameText);
				avatarCol.appendChild(avatarImage);

				// // Append the cells to the row.
				personRow.appendChild(userIdCol);
				personRow.appendChild(fNameCol);
				personRow.appendChild(lNameCol);
				personRow.appendChild(avatarCol);

				// Append row to the table.
				myTable.appendChild(personRow);
			}
		}
		else {
			console.log('There was a problem with the request.');
		}
	}
}

window.onload = function () {
	makeRequest(1);
}