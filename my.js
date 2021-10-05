const url = "https://script.google.com/macros/s/AKfycbyvfys9yQPQPXPEgK86eEP9E9X8MaGR0ae2ncrRviYY/dev"

function testGS() {
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status
        })
}

function addGS() {
    const data = {
        "name": "metabaseToken2",
        "status": "active",
        "type": "string",
        "data": "sassddasa-c6de-4285-8faf-adsadwqqwqcad"
        }
    fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
}

document.getElementById("btn").addEventListener("click",testGS)
document.getElementById("btn2").addEventListener("click",addGS)