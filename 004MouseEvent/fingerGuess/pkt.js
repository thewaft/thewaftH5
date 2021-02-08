//根据用户选择，调用石头剪刀布
let r_Random=0, diScore = 0, woScore = 0, level = 1;
//关卡系统
function levelSystem() {
    if (level==1){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关";
        document.getElementById("levelName").innerHTML="大锤哥哥";
    }else if (level==2){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="模仿弟弟";
    }else if (level==3){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="赢了继续";
    }else if (level==4){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="输了就换";
    }else if (level==5){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="爱先生生";
    }else if (level==6){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="东方不败";
    }else if (level==7){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="作弊耶耶";
    }else {
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="无人之境";
        document.getElementById("tips").innerHTML=("以不变应万变，不变本身乃不断在变");
    }
}
//根据用户点击触发，进行选择
function paper() { 
    document.getElementById("mineChoice").innerHTML = "<img src=\"images/paper.png\">";
    //给出玩家选择的值
    myChoice = 1/3;
    //关卡显示
    levelSystem();
    //调用关卡
    levelChoose();
    // autoChoice();
    judge_2();
}
function rock() {
    document.getElementById("mineChoice").innerHTML = "<img src=\"images/rock.png\">";
    myChoice = 2/3;
    //autoChoice();
    judge_2();
}
function scissors() {
    document.getElementById("mineChoice").innerHTML = "<img src=\"images/scissors.png\">";
    myChoice = 3/3;
    //autoChoice();
    judge_2();
}
//电脑生成自己选择
function autoChoice(){
    let str;
    let r_Random = Math.random();
    choose();
}
function choose() {
    if (r_Random < 1 / 3) {
        str = "<img src=\"images/paper.png\">";
    } else if (r_Random < 2 / 3) {
        str = "<img src=\"images/rock.png\">";
    } else {
        str = "<img src=\"images/scissors.png\">"
    }
    document.getElementById("computerChoice").innerHTML = str;
    return r_Random;
}
//关卡函数，根据level的值调用响应的关卡
function levelChoose() {
    if (level==1){
        level_1();
    }else if (level==2){
        level_2();
    }else if (level==3){
        level_3();
    }else if (level==4){
        level_4();
    }else if (level==5){
        level_5();
    }else if (level==6){
        level_6();
    }else if (level==7){
        level_7();
    }else if (level==8){
        level_8();
    }
}
//关卡一，电脑只出锤
function level_1() {
    let r_Random=2/3-1000;
    choose();
}
//判断函数，根据机器的选择，再根据自己的选择
function judge_2() {
    let c_c = autoChoice();
    if (c_c < 1 / 3) {
        if (myChoice == 1/3) {
            draw();
        } else if (myChoice == 2 / 3) {
            lose();
        } else if (myChoice == 3 / 3) {
            win();
        }
    } else if (c_c < 2 / 3) {
        if (myChoice == 1 / 3) {
            win();
        } else if (myChoice == 2 / 3) {
            draw();
        } else if (myChoice == 3 / 3) {
            lose();
        }
    } else if (c_c < 3 / 3) {
        if (myChoice == 1 / 3) {
            lose();
        } else if (myChoice == 2 / 3) {
            win();
        } else if (myChoice == 3 / 3) {
            draw();
        }
    }
    //根据积分决定关卡数值
    if (woScore >= 5) {
        level++;
        woScore = 0;
        diScore = 0;
        document.getElementById("diScore").innerHTML = diScore;
        document.getElementById("woScore").innerHTML = woScore;
        document.getElementById("result").innerHTML = "恭喜你到第" + level + "关了";
    }

    document.write(str);
}
//胜负积分系统
function win() {
    //diScore + 0;
    woScore ++;
    document.getElementById("diScore").innerHTML = diScore;
    document.getElementById("woScore").innerHTML = woScore;
    //alert("You win");
    document.getElementById("result").innerHTML = "You win";
}
function lose() {
    diScore ++;
    //woScore += 0;
    document.getElementById("diScore").innerHTML = diScore;
    document.getElementById("woScore").innerHTML = woScore;
    //alert("You lose");
    document.getElementById("result").innerHTML = "You lose";
}
function draw() {
    diScore ++;
    woScore ++;
    document.getElementById("diScore").innerHTML = diScore;
    document.getElementById("woScore").innerHTML = woScore;
    //alert("We're in a draw");
    document.getElementById("result").innerHTML = "We're in a draw";
}
