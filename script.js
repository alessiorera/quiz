domande=["Quando lui/lei non c'e'...","Di lui/lei amo di piu'...","In comune...","Quando siamo insieme..."];
risposte=[["Mi manca tanto","Godo","Non mi manca","C'e' sempre"],["Tutto","La mente","Il carattere","Niente"],["Abbiamo tante cose","Non abbiamo niente in comune","Abbiamo solo alcune cose","Siamo fottutamente uguali cazzo"],["Vogliamo coccolarci","Vogliamo uscire","Non siamo mai insieme","Vogliamo fare cose sconcie"]];

i=0;

seleziona=(e)=>{
    next()
};

next=()=>{
    if(i<domande.length-1){
        i+=1
        aggiornaDom()
    }
    else{
        fine()
    }
};

aggiornaDom=()=>{
    let perc=(i/domande.length)*100
    console.log(perc,domande[i])
    document.querySelector("#progress").style.width=`${perc}%`
    document.querySelector("#domanda").textContent=domande[i]
    document.querySelector("#risp1").value=risposte[i][0]
    document.querySelector("#risp2").value=risposte[i][1]
    document.querySelector("#risp3").value=risposte[i][2]
    document.querySelector("#risp4").value=risposte[i][3]
    document.querySelector("#risp1").blur()
    document.querySelector("#risp2").blur()
    document.querySelector("#risp3").blur()
    document.querySelector("#risp4").blur()
    document.querySelector("#nDom").textContent=i+1
}

fine=()=>{
    document.querySelector("#progress").style.width=`100%`
    fine="100% fra, t'appost"
    document.querySelector("#domanda").textContent=fine
    document.querySelector("#risp1").style.display="none"
    document.querySelector("#risp2").style.display="none"
    document.querySelector("#risp3").style.display="none"
    document.querySelector("#risp4").style.display="none"
}