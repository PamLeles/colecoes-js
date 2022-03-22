function getAdminis(map){
    let admins = [];
    for([key,value] of map){
        if(value === "Admin"){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("João","Admin");
usuarios.set("cleiton","user");
usuarios.set("Nora","user");
usuarios.set("Jessica","Admin");
usuarios.set("Cleber","Admin");
usuarios.set("maria","Finan");

console.log(getAdminis(usuarios));