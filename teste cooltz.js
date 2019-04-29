
//brincar, dar comida, dar banho
var needs = [0,0,0]    
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`Qual o nome do seu bichinho? `, (name) => {
    console.log(`\n\nParabéns. ${name} acabou de nascer!`)
    var lifeTime = new Date();   
    
    activities()
    
    var intv1 = setInterval(()=>{                
        needs[0] = needs[0] + 1        
        console.log("\nSeu bichinho precisa se diverdir!" )
        console.log("\nQual atividade deseja fazer? Digite 1 para Brincar, 2 para dar comida e 3 para dar Banho:");
        
        var result = chuckUp(needs,lifeTime,name)
        if(result){
            clearInterval(intv1);    
            clearInterval(intv2);    
            clearInterval(intv3);    
            readline.close()
        }
        
    }, 15000);

    var intv2 = setInterval(()=>{ 
        needs[1] = needs[1] + 1
        console.log("\nSeu bichinho está com fome! :/")
        console.log("\nQual atividade deseja fazer? Digite 1 para Brincar, 2 para dar comida e 3 para dar Banho:");
    }, 30000);

    var intv3 = setInterval(()=>{ 
        needs[2] = needs[2] + 1
        console.log("\nSeu bichinho está sujo! :/")
        console.log("\nQual atividade deseja fazer? Digite 1 para Brincar, 2 para dar comida e 3 para dar Banho:");
    }, 40000);
})


function chuckUp(needs,lifeTime,name){
    if(needs[0] >= 4 && needs[1] >= 4 && needs[2] >= 4 ){
        var tempoDeVida = [];

        tempoDeVida = [new Date().getDay() - lifeTime.getDay(),
                    new Date().getHours() - lifeTime.getHours(),
                    new Date().getMinutes() - lifeTime.getMinutes(),
                    new Date().getSeconds() - lifeTime.getSeconds()] 
                    
        if(tempoDeVida[3] < 0){
            tempoDeVida[3] =  60 + tempoDeVida[3];
            tempoDeVida[2] = tempoDeVida[2] - 1;
        }


        console.log("Trágico. "+ name + " viveu " + tempoDeVida[0] + " dias, " + tempoDeVida[1] 
                + " horas, " +  tempoDeVida[2] + " minutos e " + tempoDeVida[3] + " segundos. ;/")
                
        return true;        
    }    
    return false;
}

function activities(){
    readline.question(`\n\nQual atividade deseja fazer? Digite 1 para Brincar, 2 para dar comida e 3 para dar Banho:`, (opt) => {
        switch(opt) {
            case "1":
              needs[0] = 0;
              needs[2] = needs[2] + 1;
              console.log("Legal! A necessidade de diversão é " + needs[0])
              break;
            case "2":
              // dar comida
              needs[1] = 0;
              needs[2] = needs[2] + 1;
              console.log("Boa! O nível de fome agora é " + needs[1] )
              break;        
            case "3":
              // dar banho
              needs[2] = 0;
              console.log("Ufa. O nivél de higiene agora é " + needs[2])
              break;
            default:
              // invalido
              console.log("Ops. Opção inválida")
        }
        activities(opt)        

    })

}

  
