window.onload=function(){
    var subshow=document.getElementById("subshow");
    var display=document.getElementById("display");
    var zero=document.getElementById("zero");
    var one=document.getElementById("one");
    var two=document.getElementById("two");
    var three=document.getElementById("three");
    var four=document.getElementById("four");
    var five=document.getElementById("five");
    var six=document.getElementById("six");
    var seven=document.getElementById("seven");
    var eight=document.getElementById("eight");
    var nine=document.getElementById("nine");
    var add=document.getElementById("add");
    var subtract=document.getElementById("subtract");
    var multiply=document.getElementById("multiply");
    var divide=document.getElementById("divide");
    var clear=document.getElementById("clear");
    var equals=document.getElementById("equals");
    var ss="/*-+"
    var cal=false;
    subshow.innerText="";
    display.innerText="0";
    
    
    function refresh(){
       display.innerText="0";
       subshow.innerText="";
    }

    clear.onclick=function(){
        refresh();
    }
    
    zero.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
       // if(str1==0){
       //     console.log("truth");
       // }
        else if(str1=="0"){
            subshow.innerText="0";
            display.innerText="0";
        }
        else{
            subshow.innerText+="0";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
            display.innerText="0";
            } else{
                   display.innerText+="0";
            }
        }
    }

    one.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;
        
        if(str1.length>16){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="1";
            display.innerText="1";
        }else{
            subshow.innerText+="1";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="1";
            }else{
                display.innerText+="1";
            }
        }
    }

    two.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="2";
            display.innerText="2";
        }else{
            subshow.innerText+="2";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="2";
            }else{
                display.innerText+="2";
            }
        }    
    }

    three.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="3";
            display.innerText="3";
        }else{
            subshow.innerText+="3";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="3";
            }else{
                display.innerText+="3";
            }
        }    
    }

    four.onclick=function(){
        var str1=display.innerText;
        var str2=subshow.innerText;
        if(cal){
            refresh();
            cal=false;
        }

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="4";
            display.innerText="4";
        }else{
            subshow.innerText+="4";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="4";
            }else{
                display.innerText+="4";
            }
        }    
    }

    five.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="5";
            display.innerText="5";
        }else{
            subshow.innerText+="5";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="5";
            }else{
                display.innerText+="5";
            }
        }
    }

    six.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="6";
            display.innerText="6";
        }else{
            subshow.innerText+="6";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="6";
            }else{
                display.innerText+="6";
            }
        }
    }

    seven.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="7";
            display.innerText="7";
        }else{
            subshow.innerText+="7";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="7";
            }else{
                display.innerText+="7";
            }
        }
    }

    eight.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="8";
            display.innerText="8";
        }else{
            subshow.innerText+="8";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="8";
            }else{
                display.innerText+="8";
            }
        }
    }

    nine.onclick=function(){
        if(cal){
            refresh();
            cal=false;
        }
        var str1=display.innerText;
        var str2=subshow.innerText;

        if(str1.length>17){
            display.innerText=str1;
        }
        else if(str1=="0"){
            subshow.innerText="9";
            display.innerText="9";
        }else{
            subshow.innerText+="9";
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="9";
            }else{
                display.innerText+="9";
            }
        }
    }

    decimal.onclick=function(){
        var str1=display.innerText;
        var str2=subshow.innerText;
        /*. contains*/
        var flag=false;
        for(let i=0;i<str1.length;i++){
            if(str1.charAt(i)=="."){
                flag=true;
                break;
            }
        }

        if(cal){
            refresh();
            cal=false;
        }
        if(str1.length>17){
            var time= new Date().getTime();
            while(new Date().getTime()-time<3000){
                display.innerText="DATA LIMIT EXCEEDED";
            }
            display.innerText=str1;
        }
        
        if(str1=="0"){
            if(subshow.innerText=="0"){
                subshow.innerText+="."
            }else{
            subshow.innerText+="0.";}
            display.innerText+=".";
        }
        else if(flag){

        }
        else{
            if(str1=="/" || str1=="*" || str1=="-" || str1=="+"){
                display.innerText="0.";
                subshow.innerText+=display.innerText;
            }else{
                display.innerText+=".";
                subshow.innerText+=".";
            }
        }
        
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    add.onclick=function(){
        if(cal){
            subshow.innerText=display.innerText;
            cal=false;
        }
        var str2=display.innerText;
        var str3=subshow.innerText;
        if(str2=="+" || str2=="-" || str2=="/" || str2=="*"){
            str3=setCharAt(str3,str3.length-1,"+");
            console.log(str3);
            subshow.innerText=str3;
            display.innerText="+";
        }else{
        subshow.innerText+="+";
        display.innerText="+";
        }
    }

    subtract.onclick=function(){
        if(cal){
            subshow.innerText=display.innerText;
            cal=false;
        }
        var str2=display.innerText;
        var str3=subshow.innerText;
        if(str2=="+" || str2=="-" || str2=="/" || str2=="*"){
            str3=setCharAt(str3,str3.length-1,"-");
            console.log(str3);
            subshow.innerText=str3;
            display.innerText="-";
        }else{
        subshow.innerText+="-";
        display.innerText="-";
        }
    }

    multiply.onclick=function(){
        if(cal){
            subshow.innerText=display.innerText;
            cal=false;
        }
        var str2=display.innerText;
        var str3=subshow.innerText;
        if(str2=="+" || str2=="-" || str2=="/" || str2=="*"){
            str3=setCharAt(str3,str3.length-1,"*");
            console.log(str3);
            subshow.innerText=str3;
            display.innerText="*";
        }else{
        subshow.innerText+="*";
        display.innerText="*";
        }
    }

    divide.onclick=function(){
        if(cal){
            subshow.innerText=display.innerText;
            cal=false;
        }
        var str2=display.innerText;
        var str3=subshow.innerText;
        if(str2=="+" || str2=="-" || str2=="/" || str2=="*"){
            str3=setCharAt(str3,str3.length-1,"/");
            console.log(str3);
            subshow.innerText=str3;
            display.innerText="/";
        }else{
        subshow.innerText+="/";
        display.innerText="/";
        }
    }

    equals.onclick=function(){



    var exp=subshow.innerText;
    var forshow=subshow.innerText;
    var arr=[];
    var i=0;
    var str="";
    var flag=true;

    console.log(exp);

    var divide=exp.split("/")

    for(i=1;i<divide.length;i++){
        divide.splice(i,0,"/");
        i++;
    }

    console.log(divide);

    var ti=[];

    for(i=0;i<divide.length;i++){
        if(divide[i]=="+"  || divide[i]=="-"  || divide[i]=="*"  || divide[i]=="/" ){
            continue;
        }else{
            ti=divide[i].split("+");
            for(let j=1;j<ti.length;j++){
                ti.splice(j,0,"+");
                j++;
            }

            divide.splice(i,1);
            for(let j=0;j<ti.length;j++){
                divide.splice(i+j,0,ti[j]);
            }
//divide.splice(ti.length,1);

        }
        i=i+ti.length;
    }

    console.log(divide);


    for(i=0;i<divide.length;i++){
        if(divide[i]=="+"  || divide[i]=="-"  || divide[i]=="*"  || divide[i]=="/" ){
            continue;
        }else{
            ti=divide[i].split("-");
            for(let j=1;j<ti.length;j++){
                ti.splice(j,0,"-");
                j++;
            }

            divide.splice(i,1);
            for(let j=0;j<ti.length;j++){
                divide.splice(i+j,0,ti[j]);
            }
//divide.splice(ti.length,1);

        }
    i=i+ti.length;
    }

        console.log(divide);


    for(i=0;i<divide.length;i++){
        if(divide[i]=="+"  || divide[i]=="-"  || divide[i]=="*"  || divide[i]=="/" ){
            continue;
        }else{
            ti=divide[i].split("*");
            for(let j=1;j<ti.length;j++){
                ti.splice(j,0,"*");
                j++;
            }

            divide.splice(i,1);
            for(let j=0;j<ti.length;j++){
                divide.splice(i+j,0,ti[j]);
            }
//divide.splice(ti.length,1);

        }
        i=i+ti.length;
    }

    if(divide[0]=="+"  || divide[0]=="-"  || divide[0]=="*"  || divide[0]=="/" ){
        divide.splice(0,0,"0");
    }

    console.log(divide);

    for(i=0;i<divide.length;i++){
        if(divide[i]=="+"  || divide[i]=="-"  || divide[i]=="*"  || divide[i]=="/" ){
            continue;
        }
        else{
            divide[i]=parseFloat(divide[i]);
        }
    }
    var v=0;

    console.log(divide);

    
    for(i=0;i<divide.length;i++){
        if(divide[i]=="*"){
            v=parseFloat(divide[i-1])*parseFloat(divide[i+1])
            v=v.toFixed(4);
            divide.splice(i-1,3,v);
        }
    }

    for(i=0;i<divide.length;i++){
        if(divide[i]=="/"){
            v=parseFloat(divide[i-1])/parseFloat(divide[i+1])
            v=v.toFixed(4);
            divide.splice(i-1,3,v);
        }
    }

    for(i=0;i<divide.length;i++){
        if(divide[i]=="-"){
            v=parseFloat(divide[i-1])-parseFloat(divide[i+1])
            v=v.toFixed(4);
            divide.splice(i-1,3,v);
        }
    }

    for(i=0;i<divide.length;i++){
        if(divide[i]=="+"){
            v=parseFloat(divide[i-1])+parseFloat(divide[i+1])
            v=v.toFixed(4);
            divide.splice(i-1,3,v);
        }
    }

    



    var flag1=false;
    var valuetodeliver=0;
    var llength=divide[0].length;
    for(let k=0;k<divide[0].length;k++){
        if(divide[0].charAt(k)=="."){
            flag1=true;
            valuetodeliver=k;
            break;
        }
    }

    if(flag1) {
        var tofloat = divide[0].length - valuetodeliver - 1;
    while(divide[0].charAt(divide[0].length-1)=="0" && divide[0]!="0" && tofloat>0 /*divide[0].length>=(llength-valuetodeliver-1)*/){
            divide[0]=parseFloat(divide[0]).toFixed(tofloat-1);
            tofloat--;
        }
    }



    console.log(divide)

    display.innerText=divide[0];
    var answer=forshow+" = "+divide[0];
    subshow.innerText=answer;
    cal=true;
    }

    
}