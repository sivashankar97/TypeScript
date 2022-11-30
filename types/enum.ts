enum Responses {
    no,
    yes,
    maybe
}

enum Reposness {
    no = " no",
    yes = " yes",
    maybe = "hello"
}

function isdelivered (status : Reposness){
    return status === Reposness.no
}