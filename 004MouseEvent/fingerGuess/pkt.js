//根据用户选择，调用石头剪刀布
let r_Random=0, diScore = 0, woScore = 0, level = 3;
//关卡系统，主要作用是显示当前第几关，只需要在通过小关之后进行调用
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
        document.getElementById("levelName").innerHTML="爱布生生";
    }else if (level==6){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="东方不败";
    }else if (level==7){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="作弊耶耶";
    }else if (level==8){
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="无人之境";
        document.getElementById("tips").innerHTML=
            ("以不变应万变，不变本身乃不断在变");
    }else {
        document.getElementById("levelNumber").innerHTML= "第"+level+"关" ;
        document.getElementById("levelName").innerHTML="碳基莫及";
        document.getElementById("tips").innerHTML=
            ("Congratulations." + "<br/>"
                +"&nbsp"+"You win the final victory." +"<br/>"
                +"&nbsp"+"&nbsp"+ "Game made by Peanut Butter.");
    }
}
//初始化时需在第一次出拳之前显示关卡名称
levelSystem();
//根据用户点击触发，进行选择
function paper() { 
    document.getElementById("mineChoice").innerHTML = "<img src=\"images/paper.png\">";
    //给出玩家选择的值
    myChoice = 1/3;
    //关卡显示    level=levelChoice();   levelChoose();
    //调用根据分数计算得出的关卡,在judge_2里已经解决
    //levelChoose();
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

//根据r_Random的值判断计算机应该出剪刀石头布哪一种
function choose() {
    let str;
    if (r_Random < 1/3) {
        str = "<img src=\"images/paper.png\">";
    } else if (r_Random < 2/3) {
        str = "<img src=\"images/rock.png\">";
    } else {
        str = "<img src=\"images/scissors.png\">"
    }
    document.getElementById("computerChoice").innerHTML = str;
    // return r_Random;
}
//判断函数，根据机器的选择，再根据自己的选择
function judge_2() {
    let c_c = computerChoose();
    choose();
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
    //根据积分决定关卡数值，并调用显示关卡名称函数
    if (woScore >= 5) {
        level++;
        woScore = 0;
        diScore = 0;
        comIsWin=false;
        comIsFalse=true;
        document.getElementById("diScore").innerHTML = diScore;
        document.getElementById("woScore").innerHTML = woScore;
        document.getElementById("result").innerHTML = "恭喜你到第" + level + "关了";
        levelSystem();
    }
    // document.write(str);
}
//关卡一，电脑只出锤
function level_1() {
    r_Random=2/3-1/1000;
    choose();
    // return r_Random;
}
//关卡二，模仿玩家
function level_2() {

}
//关卡三，电脑通过什么赢了就继续出上一次的选择
function level_3() {

}
//关卡四，电脑输了，下一次换其他选项
function level_4() {

}
//关卡五，老爱出布
function level_5() {

}
//关卡六，东方不败，电脑50%概率必输，50%概率随机
function level_6() {

}
//关卡七，50%概率玩家必输
function level_7() {

}
//关卡八，1.胜利分数>100，2.连赢两次才算赢，连输两次回到上一关
function level_8() {

}

//关卡函数，根据level的值调用响应的关卡，无奈level_n函数调用不了
/*function levelChoice() {
    if (level==1){

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
}*/
/*根据关卡设定，决定r_Random的值，并把r_Random返回给r_Random，
相当于是一个根据关卡处理r_Random的值的函数*/
function computerChoose(isWin,isFalse) {
    if (level==1){
        //为什么这里不能调用level_1()函数，在浏览器里调试每次都这一步都调不动level_1函数，然后直接结束levelChoose()函数
        // level_1();
        // let level_1=level_1();
        // return level_1;
        r_Random=2/3-1/1000;
        return r_Random;
    }else if (level==2){
        //level_2();
        r_Random=myChoice-1/1000;
        return r_Random;
    }else if (level==3){
        //level_3();赢了继续
        if (!comIsWin){
            r_Random=Math.random();
        }
        return r_Random;
    }else if (level==4){
        let n=0;
        let diff=r_Random;
        //level_4();赢了继续出，但是一旦输了就换,（与上一次不一样）
        if (comIsFalse  && n==0){                  //添加一个每关玩的次数的变量，用来控制每一关第一次的初始值
            r_Random=Math.random();
            n++;
        }else if (comIsFalse){
            r_Random=Math.random();               //这块儿感觉能用逻辑条件优化一下
            while (Math.abs(diff-r_Random)<1/3){
                r_Random=Math.random();
            }
        }
        return r_Random;
    }else if (level==5){
        //level_5();老爱出布
        r_Random=Math.random();
        if (1/3<r_Random<4/9){
            r_Random=r_Random-3/9;
        }else if (6/9<r_Random<7/9){
            r_Random=r_Random-7/9;
        }
        return r_Random;
    }else if (level==6){
       // level_6();50%必输
        let c_Random;
        c_Random=Math.random();
        if (c_Random<1/2){
            if (myChoice==1/3){
                r_Random=2/3-1/1000;
            }else if (myChoice==2/3){
                r_Random=3/3-1/1000;
            }else {
                r_Random=1/3-1/1000;
            }
        }else {
            r_Random=Math.random();
        }
        return r_Random;
    }else if (level==7){
       // level_7();%50必赢
        let d_Random=Math.random();
        if (d_Random<(1/2)){
            if (myChoice==(1/3)){
                r_Random=3/3-1/1000;
            }else if (myChoice==2/3){
                r_Random=1/3-1/1000;
            }else {
                r_Random=2/3-1/1000;
            }
        }else {
            r_Random=Math.random();
        }
    }else if (level==8){
        //level_8();

    }else {

    }
}

//胜负积分系统
let comIsWin=false,comIsFalse=true;              //需要判定输赢，bot需要根据输赢做出判断，添加输赢变量
function win() {
    //diScore + 0;
    woScore ++;
    document.getElementById("diScore").innerHTML = diScore;
    document.getElementById("woScore").innerHTML = woScore;
    //alert("You win");
    document.getElementById("result").innerHTML = "You win";
    comIsFalse=true;
}
function lose() {
    diScore ++;
    //woScore += 0;
    document.getElementById("diScore").innerHTML = diScore;
    document.getElementById("woScore").innerHTML = woScore;
    //alert("You lose");
    document.getElementById("result").innerHTML = "You lose";
    comIsWin=true;
    comIsFalse=false;
}
function draw() {
    diScore ++;
    woScore ++;
    document.getElementById("diScore").innerHTML = diScore;
    document.getElementById("woScore").innerHTML = woScore;
    //alert("We're in a draw");
    document.getElementById("result").innerHTML = "We're in a draw";
    comIsFalse=false;
}