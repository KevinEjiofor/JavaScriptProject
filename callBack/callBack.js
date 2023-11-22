function getData(url, success, error) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            success(JSON.parse(xhr.response));
        } else {
            error(xhr.response);
        }
    };
}

function success(data) {
    console.log("success");
    console.log(data);
}

function error(err) {
    console.log("error occurred - $(err)");
}

getData("https://reqres.in/api/users/1",success,error);
