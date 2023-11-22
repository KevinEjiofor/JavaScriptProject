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



getData("https://reqres.in/api/users/1", (res1) => {
    console.log("Res1 -> ", res1);

    getData("https://reqres.in/api/users/2", (res2) => {
        console.log("Res2 -> ", res2);

        getData("https://reqres.in/api/users/3", (res3) => {
            console.log("Res3 -> ", res3);

            getData("https://reqres.in/api/users/4", (res4) => {
                console.log("Res4 -> ", res4);
            }, error);
        }, error);
    }, error);
}, error);
