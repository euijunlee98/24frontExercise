function checkInput(){
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;

    if(id == "skuSoftware18" && pw == "skuniv2018"){
        alert("환영합니다.");
        window.location.href = 'main.html';
    } else{
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
}
