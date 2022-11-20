function solution(id_pw, db) {
const arr = db.map(v=>{
        if(id_pw.includes(v[0])){
            if(id_pw.includes(v[1])) return  "login"
            else return "wrong pw"
        }
            else return "fail"
    })
return arr.includes("login")?"login":arr.includes("wrong pw")?"wrong pw":"fail"
}