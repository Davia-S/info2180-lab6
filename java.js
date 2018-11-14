function definitions(searchAll){
    if (document.getElementById("search").onclick){
        let word = document.getElementById("searchField");
        word = xhttp.open("GET", "request.php", true);
        alert(xhttp.send());
    }
}

function getAll(xml, query){
    let i;
    let xmlDoc = xml.responseXML;
    let allDef="<ol>";
    let x = xmlDoc.getElementsByTagName("definition");
    let notFound = true;
    
    if (searchAll)
    {
        for (i = 0; i <x.length; i++) 
        { 
            allDef += "<li>" + "<h3>" + x[i].getAttributeNode("name").value + "</h3>" + // prints the name attribute of the definition
            "<p>" + x[i].childNodes[0].nodeValue + "</p>" +                             // prints the definition of the word
            "<p> - " + x[i].getAttributeNode("author").value + "</p>" +                 // prints the name attribute of the definition
            "</li>";  
        }
        allDef += "</ol>";
        document.getElementById("result").innerHTML = allDef;
    }
    else
    {
        for (i = 0; i <x.length; i++) 
        { 
            if (x[i].getAttributeNode("name").value.toLowerCase() == query)
            {
                document.getElementById("result").innerHTML  = "<ol><li>" + "<h3>" + x[i].getAttributeNode("name").value + "</h3>" + 
                "<p>" + x[i].childNodes[0].nodeValue + "</p>" +                             
                "<p> - " + x[i].getAttributeNode("author").value + "</p>" +                 
                "</li></ol>";
                notFound = false;
                break;
            }
            
        }
        
        if(notFound)
        {
            document.getElementById("result").innerHTML  = "<h3>No Results found for: '" + query + "'</h3>";
        }
    }
}
