document.addEventListener('DOMContentLoaded', () => {
    let comment = document.querySelector("form")
    comment.addEventListener('submit', (event) => {
        event.preventDefault()
        leaveComment(event.target.comment_input.value)
        comment.reset()
    })
    
})

let timer = setInterval(upTimer, 1000);

let totalSeconds = 0

function upTimer() {
    totalSeconds++;
    document.querySelector('#counter').innerHTML = totalSeconds;
}

let pauseBtn = document.querySelector('#pause')

pauseBtn.addEventListener('click', (event) => { 
    pauseBtn.textContent = 'resume';
    clearInterval(timer);
  })

let minus = document.querySelector('#minus')
minus.addEventListener('click', subtractTime)

function subtractTime () {
    document.querySelector('#counter').innerHTML = totalSeconds - 1;
}

let plus = document.querySelector('#plus')
plus.addEventListener('click', addTime)

function addTime () {
    document.querySelector('#counter').innerHTML = totalSeconds + 1;
}

let like = document.querySelector('#heart')
like.addEventListener('click', addLike)

function addLike () {
    let likeCount = document.createElement('li')
    likeCount.textContent = `${totalSeconds} has been liked 1 time`
    document.querySelector('#likes').appendChild(likeCount)

}


function leaveComment(userComment) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'Delete'
    li.textContent = `${userComment} `
    li.appendChild(btn)
    console.log(li)
    document.querySelector('#list').appendChild(li)
}

function handleDelete(event) {
    event.target.parentNode.remove()
}