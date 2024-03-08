const apiurl = `https://v2.jokeapi.dev/joke/any?type=single`
const btn = document.getElementById('generatebtn')

async function getjoke(){
    try{

        const response = await fetch(apiurl).then(
            data => data.json()
        ).then(
            jokes => {
                // console.log(jokes.joke);
                document.querySelector(".joke").innerHTML = jokes.joke;
            }
        )
    }catch(err){
        console.log(err.message);
    }
};

btn.addEventListener('click', () =>{
    getjoke();
    document.querySelector(".imoji").innerHTML = "😂";
})

console.clear();