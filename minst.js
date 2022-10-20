function jsonDown(url){
    p_id = url+"?__a=1&__d=dis";
    console.log('https://www.instagram.com/p/'+p_id);
    var prom = new Promise(resolve => {
        setTimeout(() => {
            resolve(
                fetch('https://www.instagram.com/p/'+p_id).then(function (response) {
                    switch (response.status) {
                        // status "OK"
                        case 200:
                            return response.text();
                        // status "Not Found"
                        case 404:
                            throw response;
                    }
                })
            );
        }, 100);
    });
    console.log(result);
    return prom.then(result =>getLink(result));
}
