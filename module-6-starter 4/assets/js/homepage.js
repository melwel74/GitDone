var getUserRepos = function () {
    console.log("Is this working?");
    var response = fetch("https://api.github.com/users/octocat/repos").then(function (response) {
        console.log("inside", response);
        console.log("outside", response);
        // Notice that the data is coming back as undefined
        // This is because the fetch() method is asyn

    });

};
    getUserRepos();