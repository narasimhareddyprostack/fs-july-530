let goToMovie = (success, failure) => {
    let amount = 100;
    if (amount > 500) {
        success("Go to Movie.. with popcorn!");
    }
    else {
        failure("Go to PG.. and Take Sambar. sleep")
    }
}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})