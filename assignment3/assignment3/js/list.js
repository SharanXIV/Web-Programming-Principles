// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    //Ordered List
    var myContainer = document.querySelector ("#fruit");
    var myList = "<ol>";

    for (var i = 0; i < fruits.length; i++){
        myList+= "<li>"+fruits[i]+"</li>";
    }

    myList += "</ol>";
    myContainer.innerHTML = myList;

    //Unordered List
    var myContainer2 = document.querySelector ("#directories");
    var myList2 = "<ul>";

    for (var i = 0; i < directory.length; i++){
        myList2 += "<li>";
    
        if (directory[i].type == "file"){
            myList2 += directory[i].name;
        }
        else{
            myList2 += directory[i].name + "<ul>";
            for (var j = 0; j < directory[i].files.length; j++){
                myList2 += "<li>"+directory[i].files[j].name+"</li>";
            }
            myList2 += "</ul>";
        }
        myList2 += "</li>";
    }

    myList2 += "</ul>"
    
    myContainer2.innerHTML = myList2;
};