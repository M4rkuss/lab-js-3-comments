class Comment {
  constructor (nam, dat, comm) {
    this.name = nam;
    this.date = dat;
    this.comment = comm;
  }
}

let comments = []

document.getElementById('btnOk').addEventListener('click', function () {
  let date = new Date();
  document.getElementById("name").innerText = document.getElementById("inputName").value;
  document.getElementById("date").innerText = date.toLocaleTimeString() + " - " + date.toLocaleDateString();
  document.getElementById("comment").innerText = document.getElementById('inputText').value;
  let commentObj = new Comment(document.getElementById("name").innerText, document.getElementById("date").innerText, document.getElementById("comment").innerText);
  comments.push(commentObj);
})

document.getElementById('BtnShowAll').addEventListener('click', function () {
  let newWindow = window.open('all-comments.html', '_blank');
  newWindow.obj = comments;
})
